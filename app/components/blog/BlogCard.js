import Link from "next/link";

function ImagePlaceholder() {
  return (
    <div className="blog-card-img-placeholder">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="40" height="40">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    </div>
  );
}

/** @param {{ post: import('../../lib/wordpress/content/types.js').PostSummary, animDelay?: number }} props */
export default function BlogCard({ post, animDelay = 0 }) {
  const badge = post.category ?? "Blog";

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="blog-card"
      data-anim="scale-up"
      data-anim-delay={animDelay || undefined}
    >
      <div className="blog-card-img-wrap">
        {post.featuredImage ? (
          <img
            src={post.featuredImage.url}
            alt={post.featuredImage.alt || post.title}
            className="blog-card-img"
          />
        ) : null}
        <ImagePlaceholder />
        <span className="blog-card-tag">{badge}</span>
      </div>
      <div className="blog-card-body">
        <h2 className="blog-card-title">{post.title}</h2>
        {post.excerpt ? <p className="blog-card-excerpt">{post.excerpt}</p> : null}
        <span className="blog-card-read">Read more →</span>
      </div>
    </Link>
  );
}
