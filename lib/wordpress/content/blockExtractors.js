import { parseRichText, isRichTextEmpty } from "./parseRichText.js";

/** @typedef {import('./types.js').ContentBlock} ContentBlock */

/**
 * @param {import('cheerio').CheerioAPI} $
 * @param {import('cheerio').Element} element
 * @returns {ContentBlock | null}
 */
export function extractParagraph($, element) {
  const tag = element.tagName?.toLowerCase();
  const $el = $(element);
  const isParagraph =
    tag === "p" ||
    $el.hasClass("wp-block-paragraph") ||
    ($el.attr("class") ?? "").includes("wp-block-paragraph");

  if (!isParagraph) return null;

  const content = parseRichText($, element);
  if (isRichTextEmpty(content)) return null;

  return { type: "paragraph", data: { content } };
}

/**
 * @param {import('cheerio').CheerioAPI} $
 * @param {import('cheerio').Element} element
 * @returns {ContentBlock | null}
 */
export function extractHeading($, element) {
  const tag = element.tagName?.toLowerCase() ?? "";
  const $el = $(element);
  const isHeading =
    /^h[1-6]$/.test(tag) ||
    $el.hasClass("wp-block-heading") ||
    ($el.attr("class") ?? "").includes("wp-block-heading");

  if (!isHeading) return null;

  let level = /^h([1-6])$/.test(tag) ? Number(tag.charAt(1)) : 2;
  if ($el.attr("class")?.includes("has-h-")) {
    const match = $el.attr("class")?.match(/has-h-(\d)-font-size/);
    if (match) level = Number(match[1]);
  }

  if (level < 2) return null;
  if (level > 4) level = 4;

  const content = parseRichText($, element);
  if (isRichTextEmpty(content)) return null;

  return { type: "heading", data: { level, content } };
}

/**
 * @param {import('cheerio').CheerioAPI} $
 * @param {import('cheerio').Element} element
 * @returns {ContentBlock | null}
 */
export function extractList($, element) {
  const tag = element.tagName?.toLowerCase();
  const $el = $(element);
  const isList =
    tag === "ul" ||
    tag === "ol" ||
    $el.hasClass("wp-block-list") ||
    ($el.attr("class") ?? "").includes("wp-block-list");

  if (!isList) return null;

  const listEl = tag === "ul" || tag === "ol" ? $el : $el.find("ul, ol").first();
  if (!listEl.length) return null;

  const ordered = listEl.prop("tagName")?.toLowerCase() === "ol";
  /** @type {import('./types.js').RichTextNode[][]} */
  const items = [];

  listEl.find("> li").each((_, li) => {
    const content = parseRichText($, li);
    if (!isRichTextEmpty(content)) items.push(content);
  });

  if (items.length === 0) return null;

  return { type: "list", data: { ordered, items } };
}

/**
 * @param {import('cheerio').CheerioAPI} $
 * @param {import('cheerio').Element} element
 * @returns {ContentBlock | null}
 */
export function extractImage($, element) {
  const tag = element.tagName?.toLowerCase();
  const $el = $(element);
  const isImageBlock =
    tag === "figure" ||
    tag === "img" ||
    $el.hasClass("wp-block-image") ||
    ($el.attr("class") ?? "").includes("wp-block-image");

  if (!isImageBlock) return null;

  const figure = tag === "figure" ? $el : $el.closest("figure");
  const img = figure.length ? figure.find("img").first() : $el.is("img") ? $el : $el.find("img").first();

  if (!img.length) return null;

  const src = img.attr("src") ?? "";
  if (!src) return null;

  const alt = img.attr("alt") ?? "";
  const captionEl = figure.length ? figure.find("figcaption").first() : $();
  const caption = captionEl.length ? parseRichText($, captionEl.get(0)) : undefined;

  return {
    type: "image",
    data: {
      src,
      alt,
      ...(caption && !isRichTextEmpty(caption) ? { caption } : {}),
    },
  };
}

/**
 * @param {import('cheerio').CheerioAPI} $
 * @param {import('cheerio').Element} element
 * @returns {ContentBlock | null}
 */
export function extractQuote($, element) {
  const tag = element.tagName?.toLowerCase();
  const $el = $(element);
  const isQuote =
    tag === "blockquote" ||
    $el.hasClass("wp-block-quote") ||
    ($el.attr("class") ?? "").includes("wp-block-quote");

  if (!isQuote) return null;

  const citeEl = $el.find("cite").first();
  const contentEl = citeEl.length ? $el.clone().children("cite").remove().end() : $el;
  const content = parseRichText($, contentEl.get(0));
  const citation = citeEl.length ? parseRichText($, citeEl.get(0)) : undefined;

  if (isRichTextEmpty(content)) return null;

  return {
    type: "quote",
    data: {
      content,
      ...(citation && !isRichTextEmpty(citation) ? { citation } : {}),
    },
  };
}

/**
 * @param {string} url
 * @returns {'youtube' | 'vimeo' | null}
 */
function getEmbedProvider(url) {
  if (/youtube\.com|youtu\.be/i.test(url)) return "youtube";
  if (/vimeo\.com/i.test(url)) return "vimeo";
  return null;
}

/**
 * @param {import('cheerio').CheerioAPI} $
 * @param {import('cheerio').Element} element
 * @returns {ContentBlock | null}
 */
export function extractEmbed($, element) {
  const $el = $(element);
  const isEmbed =
    $el.hasClass("wp-block-embed") ||
    ($el.attr("class") ?? "").includes("wp-block-embed") ||
    $el.find(".wp-block-embed").length > 0;

  if (!isEmbed && element.tagName?.toLowerCase() !== "figure") return null;

  const wrapper = $el.hasClass("wp-block-embed") ? $el : $el.find(".wp-block-embed").first();
  if (!wrapper.length && !$el.hasClass("wp-block-embed")) return null;

  const iframe = (wrapper.length ? wrapper : $el).find("iframe").first();
  const embedUrl = iframe.attr("src") ?? "";
  const link = (wrapper.length ? wrapper : $el).find("a").first().attr("href") ?? embedUrl;
  const provider = getEmbedProvider(embedUrl || link);

  if (!provider || !embedUrl) return null;

  return {
    type: "embed",
    data: { provider, url: link, embedUrl },
  };
}

/**
 * @param {import('cheerio').CheerioAPI} $
 * @param {import('cheerio').Element} element
 * @returns {ContentBlock | null}
 */
export function extractButton($, element) {
  const $el = $(element);
  const isButton =
    $el.hasClass("wp-block-button") ||
    ($el.attr("class") ?? "").includes("wp-block-button") ||
    $el.find(".wp-block-button__link").length > 0;

  if (!isButton) return null;

  const link = $el.find("a.wp-block-button__link, a").first();
  if (!link.length) return null;

  const href = link.attr("href") ?? "";
  const label = link.text().trim();
  if (!href || !label) return null;

  return { type: "button", data: { label, href } };
}

/**
 * @param {import('cheerio').CheerioAPI} $
 * @param {import('cheerio').Element} element
 * @returns {ContentBlock | null}
 */
export function extractSeparator($, element) {
  const tag = element.tagName?.toLowerCase();
  const $el = $(element);
  const isSeparator =
    tag === "hr" ||
    $el.hasClass("wp-block-separator") ||
    ($el.attr("class") ?? "").includes("wp-block-separator");

  if (!isSeparator) return null;

  return { type: "separator", data: {} };
}

/**
 * @param {import('cheerio').CheerioAPI} $
 * @param {import('cheerio').Element} element
 * @returns {ContentBlock | null}
 */
export function extractCode($, element) {
  const tag = element.tagName?.toLowerCase();
  const $el = $(element);
  const isCode =
    tag === "pre" ||
    $el.hasClass("wp-block-code") ||
    ($el.attr("class") ?? "").includes("wp-block-code");

  if (!isCode) return null;

  const code = $el.find("code").length ? $el.find("code").first().text() : $el.text();
  if (!code.trim()) return null;

  const language = $el.find("code").attr("class")?.match(/language-(\w+)/)?.[1];

  return {
    type: "code",
    data: {
      code: code.trim(),
      ...(language ? { language } : {}),
    },
  };
}

/**
 * @param {import('cheerio').Element} element
 * @returns {ContentBlock}
 */
export function extractUnsupported(element) {
  const className = element.attribs?.class ?? element.tagName ?? "unknown";
  const blockName = className
    .split(/\s+/)
    .find((cls) => cls.startsWith("wp-block-")) ?? element.tagName ?? "unknown";

  return { type: "unsupported", data: { blockName } };
}

/** @type {((($: import('cheerio').CheerioAPI, element: import('cheerio').Element) => ContentBlock | null))[]} */
export const BLOCK_EXTRACTORS = [
  extractEmbed,
  extractButton,
  extractImage,
  extractQuote,
  extractList,
  extractHeading,
  extractCode,
  extractSeparator,
  extractParagraph,
];
