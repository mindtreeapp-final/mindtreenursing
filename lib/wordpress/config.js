/**
 * @returns {{ apiUrl: string, revalidate: number, postsPerPage: number }}
 */
export function getWordPressConfig() {
  return {
    apiUrl: process.env.WORDPRESS_API_URL ?? "",
    revalidate: Number(process.env.WORDPRESS_REVALIDATE_SECONDS ?? 300),
    postsPerPage: Number(process.env.BLOG_POSTS_PER_PAGE ?? 9),
  };
}

/**
 * @returns {boolean}
 */
export function isWordPressConfigured() {
  return Boolean(getWordPressConfig().apiUrl);
}
