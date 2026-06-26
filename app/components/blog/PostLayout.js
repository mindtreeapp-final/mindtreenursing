import Link from "next/link";
import Image from "next/image";
import PostBody from "./PostBody.js";

function FeaturedPlaceholder() {
  return (
    <div className="post-featured-placeholder">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="52" height="52">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    </div>
  );
}

/** @param {{ post: import('../../lib/wordpress/content/types.js').PostDetail }} props */
export default function PostLayout({ post }) {
  const badge = post.category ?? "Blog";

  return (
    <>
      <div className="blog-back-wrap">
        <Link href="/blog" className="blog-back-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back to Blog
        </Link>
      </div>

      <section className="post-hero">
        <div className="post-hero-shape-1" />
        <div className="post-hero-shape-2" />
        <div className="post-hero-inner">
          <span className="blog-hero-badge">{badge}</span>
          <h1 className="post-title">{post.title}</h1>
        </div>
      </section>

      <section className="post-content-section" data-anim="up">
        <div className="post-content-inner">
          <div className="post-featured-img-wrap">
            {post.featuredImage ? (
              <Image
                src={post.featuredImage.url}
                alt={post.featuredImage.alt || post.title}
                fill
                className="post-featured-img"
                sizes="(max-width: 800px) 100vw, 800px"
                priority
              />
            ) : null}
            <FeaturedPlaceholder />
          </div>

          <PostBody blocks={post.blocks} />

          <div className="post-back-row">
            <Link href="/blog" className="post-back-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              Back to all posts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
