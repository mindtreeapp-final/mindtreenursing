import { getWordPressConfig } from "./config.js";

export class WordPressFetchError extends Error {
  /** @param {number} status @param {string} url */
  constructor(status, url) {
    super(`WordPress API request failed (${status}): ${url}`);
    this.name = "WordPressFetchError";
    this.status = status;
    this.url = url;
  }
}

/**
 * @param {string} path
 * @param {Record<string, string | number | undefined>} [params]
 * @returns {Promise<{ data: unknown, total: number | null, totalPages: number | null }>}
 */
export async function wpFetch(path, params = {}) {
  const { apiUrl, revalidate } = getWordPressConfig();

  if (!apiUrl) {
    throw new WordPressFetchError(0, "WORDPRESS_API_URL is not configured");
  }

  const url = new URL(path.replace(/^\//, ""), apiUrl.endsWith("/") ? apiUrl : `${apiUrl}/`);

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null) {
      url.searchParams.set(key, String(value));
    }
  }

  const fetchOptions =
    revalidate > 0
      ? { next: { revalidate } }
      : { cache: "no-store" };

  const response = await fetch(url.toString(), fetchOptions);

  if (!response.ok) {
    throw new WordPressFetchError(response.status, url.toString());
  }

  const total = response.headers.get("x-wp-total");
  const totalPages = response.headers.get("x-wp-totalpages");

  return {
    data: await response.json(),
    total: total ? Number(total) : null,
    totalPages: totalPages ? Number(totalPages) : null,
  };
}
