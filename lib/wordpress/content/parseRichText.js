import { decodeHtmlEntities } from "../normalize.js";

/** @typedef {import('./types.js').RichTextNode} RichTextNode */

/**
 * @param {string} text
 * @returns {RichTextNode[]}
 */
function textNode(text) {
  const value = decodeHtmlEntities(text.replace(/\s+/g, " "));
  if (!value) return [];
  return [{ type: "text", value }];
}

/**
 * Parse inline HTML into RichText nodes.
 * @param {import('cheerio').CheerioAPI} $
 * @param {import('cheerio').Element} element
 * @returns {RichTextNode[]}
 */
export function parseRichText($, element) {
  /** @type {RichTextNode[]} */
  const nodes = [];

  $(element)
    .contents()
    .each((_, node) => {
      if (node.type === "text") {
        nodes.push(...textNode(node.data ?? ""));
        return;
      }

      if (node.type !== "tag") return;

      const tag = node.tagName?.toLowerCase();
      const $node = $(node);

      if (tag === "br") {
        nodes.push({ type: "text", value: " " });
        return;
      }

      if (tag === "strong" || tag === "b") {
        const value = decodeHtmlEntities($node.text().trim());
        if (value) nodes.push({ type: "bold", value });
        return;
      }

      if (tag === "em" || tag === "i") {
        const value = decodeHtmlEntities($node.text().trim());
        if (value) nodes.push({ type: "italic", value });
        return;
      }

      if (tag === "a") {
        const value = decodeHtmlEntities($node.text().trim());
        const href = $node.attr("href") ?? "";
        if (value && href) {
          nodes.push({ type: "link", value, href });
        } else if (value) {
          nodes.push({ type: "text", value });
        }
        return;
      }

      nodes.push(...parseRichText($, node));
    });

  return nodes.filter((node) => node.value.trim().length > 0);
}

/**
 * @param {RichTextNode[]} nodes
 * @returns {boolean}
 */
export function isRichTextEmpty(nodes) {
  return nodes.length === 0 || nodes.every((node) => !node.value.trim());
}
