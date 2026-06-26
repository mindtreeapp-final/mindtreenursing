import { redirect } from "next/navigation";
import { getPosts } from "../../lib/wordpress/posts.js";
import BlogCard from "../components/blog/BlogCard.js";
import BlogPagination from "../components/blog/BlogPagination.js";
import "./blog.css";

export const metadata = {
  title: "Blogs | Mindtree Nursing Solutions",
  description:
    "Mindtree Nursing is your all-in-one premium consultant for OET, CGFNS, IQN & OSCE, plus visa, ticket, and accommodation in NZ.",
  keywords: ["New Zealand Nursing", "Mindtree Nursing Solutions"],
};

/**
 * @param {string | string[] | undefined} value
 * @returns {number}
 */
function parsePageParam(value) {
  const raw = Array.isArray(value) ? value[0] : value;
  const parsed = Number(raw);
  if (!Number.isFinite(parsed) || parsed < 1) return 1;
  return Math.floor(parsed);
}

/** @param {{ searchParams: Promise<{ page?: string }> }} props */
export default async function BlogPage({ searchParams }) {
  const params = await searchParams;
  const requestedPage = parsePageParam(params.page);
  const result = await getPosts({ page: requestedPage });

  if (
    !result.error &&
    result.totalPages > 0 &&
    requestedPage > result.totalPages
  ) {
    redirect(requestedPage === 1 ? "/blog" : `/blog?page=${result.totalPages}`);
  }

  const page = result.page;

  return (
    <main className="blog-page">
      <section className="blog-hero">
        <div className="blog-hero-shape-1" />
        <div className="blog-hero-shape-2" />
        <div className="blog-hero-inner">
          <span className="blog-hero-badge">Our Blog</span>
          <h1 className="blog-hero-title">
            Insights &amp; <em className="blog-hero-em">Stories</em>
          </h1>
          <p className="blog-hero-sub">
            Stay updated with the latest nursing news, career tips, and success stories from the Mindtree community.
          </p>
        </div>
      </section>

      <section className="blog-section">
        <div className="blog-inner">
          {result.error ? (
            <p className="blog-empty-state">{result.error}</p>
          ) : result.posts.length === 0 ? (
            <p className="blog-empty-state">No posts published yet.</p>
          ) : (
            <>
              <div className="blog-grid">
                {result.posts.map((post, index) => (
                  <BlogCard key={post.id} post={post} animDelay={index * 75} />
                ))}
              </div>
              <BlogPagination page={page} totalPages={result.totalPages} />
            </>
          )}
        </div>
      </section>
    </main>
  );
}
