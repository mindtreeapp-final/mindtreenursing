/**
 * Decode common HTML entities in plain text.
 * @param {string} text
 * @returns {string}
 */
export function decodeHtmlEntities(text) {
  return text
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ");
}

/**
 * Strip HTML tags and decode entities for excerpts.
 * @param {string} html
 * @returns {string}
 */
export function stripHtml(html) {
  if (!html) return "";
  const withoutTags = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  return decodeHtmlEntities(withoutTags);
}

/**
 * @param {import('./types.js').FeaturedImage | null | undefined} featuredImage
 * @returns {string | undefined}
 */
export function getWordPressMediaHostname(featuredImage) {
  if (featuredImage?.url) {
    try {
      return new URL(featuredImage.url).hostname;
    } catch {
      return undefined;
    }
  }

  const apiUrl = process.env.WORDPRESS_API_URL;
  if (!apiUrl) return undefined;

  try {
    return new URL(apiUrl).hostname;
  } catch {
    return undefined;
  }
}

/**
 * @param {Record<string, unknown> | undefined} embedded
 * @returns {import('./types.js').FeaturedImage | null}
 */
export function getFeaturedImage(embedded) {
  const media = embedded?.["wp:featuredmedia"];
  if (!Array.isArray(media) || media.length === 0) return null;

  const item = media[0];
  const url =
    item?.source_url ??
    item?.media_details?.sizes?.large?.source_url ??
    item?.media_details?.sizes?.medium?.source_url;

  if (!url) return null;

  return {
    url,
    alt: item?.alt_text || stripHtml(item?.title?.rendered ?? "") || "",
  };
}

/**
 * @param {Record<string, unknown> | undefined} embedded
 * @returns {string | null}
 */
export function getCategoryName(embedded) {
  const terms = embedded?.["wp:term"];
  if (!Array.isArray(terms)) return null;

  for (const termGroup of terms) {
    if (!Array.isArray(termGroup)) continue;
    const category = termGroup.find((term) => term?.taxonomy === "category");
    if (category?.name) return decodeHtmlEntities(String(category.name));
  }

  return null;
}

/**
 * @param {Record<string, unknown>} raw
 * @returns {import('./types.js').PostSummary}
 */
export function normalizePostSummary(raw) {
  return {
    id: Number(raw.id),
    slug: String(raw.slug ?? ""),
    title: stripHtml(raw.title?.rendered ?? ""),
    excerpt: stripHtml(raw.excerpt?.rendered ?? ""),
    date: String(raw.date ?? ""),
    modified: String(raw.modified ?? ""),
    featuredImage: getFeaturedImage(raw._embedded),
    category: getCategoryName(raw._embedded),
  };
}
