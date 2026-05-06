import { useEffect, useMemo, useState } from "react";

interface PostData {
  id: string;
  title: string;
  description: string;
  publishDate: string;
  tags?: string[];
  coverHue: string;
  coverAccent: string;
  cover?: string;
}

interface Props {
  posts: PostData[];
  allTags: string[];
}

export default function ArticleArchive({ posts, allTags }: Props) {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const normalizedTags = useMemo(() => new Set(allTags), [allTags]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const urlTag = params.get("tag");
    const urlSearch = params.get("q");

    if (urlTag && normalizedTags.has(urlTag)) {
      setActiveTag(urlTag);
    }

    if (urlSearch) {
      setSearch(urlSearch);
    }
  }, [normalizedTags]);

  const filtered = posts.filter((p) => {
    const matchTag = !activeTag || (p.tags ?? []).includes(activeTag);
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      (p.tags ?? []).some((t) => t.toLowerCase().includes(q));
    return matchTag && matchSearch;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);

    if (activeTag) {
      params.set("tag", activeTag);
    } else {
      params.delete("tag");
    }

    if (search.trim()) {
      params.set("q", search.trim());
    } else {
      params.delete("q");
    }

    const query = params.toString();
    const nextUrl = query ? `${window.location.pathname}?${query}` : window.location.pathname;
    window.history.replaceState(null, "", nextUrl);
  }, [activeTag, search]);

  return (
    <div>
      {/* Search bar */}
      <div style={{ marginBottom: 24, position: "relative" }}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9A9A9A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="搜尋文章、標籤…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 16px 10px 42px",
            fontSize: 14,
            border: "1px solid #D7D7D7",
            borderRadius: 8,
            outline: "none",
            color: "#2E2E2E",
            background: "#fff",
            fontFamily: "'PingFang TC','Noto Sans TC',Arial,sans-serif",
            transition: "border-color 150ms ease",
            boxSizing: "border-box",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#56C7BB")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#D7D7D7")}
        />
      </div>

      {/* Tag filter */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 40 }}>
        <button
          onClick={() => setActiveTag(null)}
          style={{
            fontSize: 13,
            padding: "5px 14px",
            borderRadius: 999,
            border: `1px solid ${activeTag === null ? "#56C7BB" : "#D7D7D7"}`,
            background: activeTag === null ? "#EAF8F7" : "#fff",
            color: activeTag === null ? "#56C7BB" : "#5D5D5D",
            cursor: "pointer",
            fontWeight: activeTag === null ? 600 : 400,
            transition: "all 120ms ease",
            fontFamily: "'PingFang TC','Noto Sans TC',Arial,sans-serif",
          }}
        >
          全部
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            style={{
              fontSize: 13,
              padding: "5px 14px",
              borderRadius: 999,
              border: `1px solid ${activeTag === tag ? "#56C7BB" : "#D7D7D7"}`,
              background: activeTag === tag ? "#EAF8F7" : "#fff",
              color: activeTag === tag ? "#56C7BB" : "#5D5D5D",
              cursor: "pointer",
              fontWeight: activeTag === tag ? 600 : 400,
              transition: "all 120ms ease",
              fontFamily: "'PingFang TC','Noto Sans TC',Arial,sans-serif",
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <p style={{ color: "#9A9A9A", fontSize: 15 }}>找不到符合的文章。</p>
      ) : (
        <ul className="card-grid">
          {filtered.map((post) => (
            <li key={post.id}>
              <a href={`/posts/${post.id}`} className="card">
                <div className="card-cover" style={{ background: post.coverHue }}>
                  {post.cover ? (
                    <img
                      src={post.cover}
                      alt={`${post.title} cover`}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      loading="lazy"
                    />
                  ) : (
                    <>
                      <div className="card-cover-shape1" style={{ background: post.coverAccent }} />
                      <div className="card-cover-shape2" style={{ background: post.coverAccent }} />
                      <div className="card-cover-label" style={{ color: post.coverAccent }}>
                        wport
                      </div>
                    </>
                  )}
                </div>
                <div className="card-body">
                  {post.tags && post.tags.length > 0 && (
                    <div className="card-tags">
                      {post.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="card-title">{post.title}</div>
                  <div className="card-excerpt">{post.description}</div>
                  <div className="card-footer">
                    <span className="card-date">
                      {new Date(post.publishDate).toLocaleDateString("zh-TW", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
