import { notFound } from "next/navigation";
import { getPostBySlug } from "../../../lib/wordpress/posts.js";
import PostLayout from "../../components/blog/PostLayout.js";
import "../blog.css";

/** @param {{ params: Promise<{ slug: string }> }} props */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found | Mindtree Nursing Solutions" };
  }

  return {
    title: `${post.title} | Mindtree Nursing Solutions`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      ...(post.featuredImage
        ? { images: [{ url: post.featuredImage.url, alt: post.featuredImage.alt }] }
        : {}),
    },
  };
}

/** @param {{ params: Promise<{ slug: string }> }} props */
export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <main className="blog-page">
      <PostLayout post={post} />
    </main>
  );
}
