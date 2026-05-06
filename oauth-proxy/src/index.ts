interface Env {
  GITHUB_CLIENT_ID: string;
  GITHUB_CLIENT_SECRET: string;
  ORIGIN: string;
}

const jsonHeaders = {
  "content-type": "application/json; charset=utf-8",
};

function getCorsHeaders(origin: string) {
  return {
    "access-control-allow-origin": origin,
    "access-control-allow-methods": "GET,POST,OPTIONS",
    "access-control-allow-headers": "Content-Type,Authorization",
    "access-control-allow-credentials": "true",
    vary: "Origin",
  };
}

function isAllowedOrigin(requestOrigin: string | null, allowedOrigin: string) {
  if (!requestOrigin) return false;
  return requestOrigin === allowedOrigin;
}

function randomState() {
  return crypto.randomUUID().replaceAll("-", "");
}

async function exchangeGitHubCode(env: Env, code: string) {
  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "user-agent": "wport-decap-oauth",
    },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`GitHub token exchange failed: ${response.status} ${text}`);
  }

  const data = (await response.json()) as {
    access_token?: string;
    token_type?: string;
    error?: string;
    error_description?: string;
  };

  if (!data.access_token) {
    throw new Error(data.error_description ?? data.error ?? "No access token");
  }

  return data.access_token;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const corsHeaders = getCorsHeaders(env.ORIGIN);

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (!env.GITHUB_CLIENT_ID || !env.GITHUB_CLIENT_SECRET || !env.ORIGIN) {
      return new Response(
        JSON.stringify({ error: "Server is not configured." }),
        { status: 500, headers: { ...jsonHeaders, ...corsHeaders } }
      );
    }

    if (url.pathname === "/auth") {
      const state = randomState();
      const redirect = new URL("https://github.com/login/oauth/authorize");
      redirect.searchParams.set("client_id", env.GITHUB_CLIENT_ID);
      redirect.searchParams.set("scope", "repo");
      redirect.searchParams.set("state", state);
      return new Response(null, {
        status: 302,
        headers: {
          location: redirect.toString(),
          "set-cookie": `decap_oauth_state=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`,
          "cache-control": "no-store",
        },
      });
    }

    if (url.pathname === "/callback") {
      const code = url.searchParams.get("code");
      const state = url.searchParams.get("state");
      const cookie = request.headers.get("cookie") ?? "";
      const savedState = cookie
        .split(";")
        .map((v) => v.trim())
        .find((v) => v.startsWith("decap_oauth_state="))
        ?.split("=")[1];

      if (!code || !state || !savedState || state !== savedState) {
        return new Response("Invalid OAuth state.", { status: 400 });
      }

      try {
        const token = await exchangeGitHubCode(env, code);
        const html = `<!doctype html><html><body><script>
          (function() {
            if (!window.opener) {
              document.body.textContent = "Authenticated. You can close this window.";
              return;
            }

            const content = { token: ${JSON.stringify(token)}, provider: "github" };
            const sendToken = function(message) {
              window.opener.postMessage(
                "authorization:github:success:" + JSON.stringify(content),
                message.origin || "${env.ORIGIN}"
              );
              window.close();
            };

            window.addEventListener("message", sendToken, false);
            window.opener.postMessage("authorizing:github", "${env.ORIGIN}");

            setTimeout(function() {
              window.opener.postMessage(
                "authorization:github:success:" + JSON.stringify(content),
                "${env.ORIGIN}"
              );
              window.close();
            }, 1500);
          })();
        </script></body></html>`;

        const response = new Response(html, {
          headers: { "content-type": "text/html; charset=utf-8" },
        });
        response.headers.append(
          "set-cookie",
          "decap_oauth_state=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0"
        );
        response.headers.set("cache-control", "no-store");
        return response;
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "OAuth callback failed.";
        return new Response(message, { status: 500 });
      }
    }

    if (url.pathname === "/health") {
      const origin = request.headers.get("origin");
      const headers = { ...jsonHeaders, ...corsHeaders };
      return new Response(
        JSON.stringify({
          ok: true,
          origin_allowed: isAllowedOrigin(origin, env.ORIGIN),
        }),
        { headers }
      );
    }

    return new Response("Not found", { status: 404, headers: corsHeaders });
  },
};
