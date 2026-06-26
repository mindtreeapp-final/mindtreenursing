import { getWordPressConfig, isWordPressConfigured } from "./config.js";
import { wpFetch, WordPressFetchError } from "./client.js";
import { normalizePostSummary } from "./normalize.js";
import { normalizePostDetail } from "./detail.js";

const EMBED = "wp:featuredmedia,wp:term";

/**
 * @param {{ page?: number, perPage?: number }} [options]
 * @returns {Promise<{ posts: import('./content/types.js').PostSummary[], total: number, totalPages: number, page: number, error?: string }>}
 */
export async function getPosts(options = {}) {
  const { postsPerPage } = getWordPressConfig();
  const page = Math.max(1, options.page ?? 1);
  const perPage = options.perPage ?? postsPerPage;

  if (!isWordPressConfigured()) {
    return { posts: [], total: 0, totalPages: 0, page, error: "WordPress is not configured" };
  }

  try {
    const { data, total, totalPages } = await wpFetch("/posts", {
      page,
      per_page: perPage,
      _embed: EMBED,
      status: "publish",
    });

    const posts = Array.isArray(data)
      ? data.map((raw) => normalizePostSummary(raw))
      : [];

    return {
      posts,
      total: total ?? posts.length,
      totalPages: totalPages ?? 1,
      page,
    };
  } catch (error) {
    const message =
      error instanceof WordPressFetchError
        ? error.message
        : "Unable to load posts";

    return { posts: [], total: 0, totalPages: 0, page, error: message };
  }
}

/**
 * @param {string} slug
 * @returns {Promise<import('./content/types.js').PostDetail | null>}
 */
export async function getPostBySlug(slug) {
  if (!isWordPressConfigured() || !slug) return null;

  try {
    const { data } = await wpFetch("/posts", {
      slug,
      _embed: EMBED,
      status: "publish",
    });

    if (!Array.isArray(data) || data.length === 0) return null;

    return normalizePostDetail(data[0]);
  } catch {
    return null;
  }
}

/**
 * @returns {Promise<{ slug: string, modified: string }[]>}
 */
export async function getAllPostSlugs() {
  if (!isWordPressConfigured()) return [];

  const slugs = [];
  let page = 1;
  let totalPages = 1;

  try {
    while (page <= totalPages) {
      const { data, totalPages: pages } = await wpFetch("/posts", {
        page,
        per_page: 100,
        _fields: "slug,modified",
        status: "publish",
      });

      totalPages = pages ?? 1;

      if (!Array.isArray(data)) break;

      for (const item of data) {
        if (item?.slug) {
          slugs.push({
            slug: String(item.slug),
            modified: String(item.modified ?? ""),
          });
        }
      }

      page += 1;
    }
  } catch {
    return slugs;
  }

  return slugs;
}
