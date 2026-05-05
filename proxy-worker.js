const BLOG_PATH_PREFIX = "/blog";

function isBlogPath(pathname) {
  return pathname === BLOG_PATH_PREFIX || pathname.startsWith(`${BLOG_PATH_PREFIX}/`);
}

function toUpstreamUrl(requestUrl, blogOrigin) {
  const incoming = new URL(requestUrl);
  const upstream = new URL(blogOrigin);
  const upstreamPath =
    incoming.pathname === BLOG_PATH_PREFIX
      ? "/"
      : incoming.pathname.replace(BLOG_PATH_PREFIX, "") || "/";

  upstream.pathname = upstreamPath;
  upstream.search = incoming.search;
  return upstream;
}

function rewriteLocationHeader(location, incomingUrl, upstreamOrigin) {
  if (!location) return location;

  if (location.startsWith("/")) {
    return `${BLOG_PATH_PREFIX}${location}`;
  }

  let parsed;
  try {
    parsed = new URL(location);
  } catch {
    return location;
  }

  if (parsed.origin !== upstreamOrigin) {
    return location;
  }

  return `${incomingUrl.origin}${BLOG_PATH_PREFIX}${parsed.pathname}${parsed.search}${parsed.hash}`;
}

export default {
  async fetch(request, env) {
    const incomingUrl = new URL(request.url);

    if (!isBlogPath(incomingUrl.pathname)) {
      return new Response("Not found", { status: 404 });
    }

    if (!env.BLOG_ORIGIN) {
      return new Response("Missing BLOG_ORIGIN", { status: 500 });
    }

    const upstreamUrl = toUpstreamUrl(request.url, env.BLOG_ORIGIN);
    const upstreamResponse = await fetch(upstreamUrl.toString(), {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: "manual",
    });

    const responseHeaders = new Headers(upstreamResponse.headers);
    const rewrittenLocation = rewriteLocationHeader(
      responseHeaders.get("location"),
      incomingUrl,
      new URL(env.BLOG_ORIGIN).origin
    );

    if (rewrittenLocation) {
      responseHeaders.set("location", rewrittenLocation);
    }

    return new Response(upstreamResponse.body, {
      status: upstreamResponse.status,
      headers: responseHeaders,
    });
  },
};
