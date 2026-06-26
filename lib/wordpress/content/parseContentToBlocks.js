import * as cheerio from "cheerio";
import { BLOCK_EXTRACTORS, extractUnsupported } from "./blockExtractors.js";

/** @typedef {import('./types.js').ContentBlock} ContentBlock */

const BLOCK_SELECTOR = [
  ".wp-block-embed",
  ".wp-block-button",
  ".wp-block-image",
  "figure.wp-block-image",
  ".wp-block-quote",
  "blockquote",
  ".wp-block-list",
  "ul",
  "ol",
  ".wp-block-heading",
  "h2",
  "h3",
  "h4",
  ".wp-block-code",
  "pre",
  ".wp-block-separator",
  "hr",
  ".wp-block-paragraph",
  "p",
].join(", ");

/**
 * @param {import('cheerio').CheerioAPI} $
 * @param {import('cheerio').Element} element
 * @returns {ContentBlock | null}
 */
function extractBlock($, element) {
  for (const extractor of BLOCK_EXTRACTORS) {
    const block = extractor($, element);
    if (block) return block;
  }
  return null;
}

/**
 * Parse WordPress rendered HTML into normalized content blocks.
 * @param {string} html
 * @returns {ContentBlock[]}
 */
export function parseContentToBlocks(html) {
  if (!html?.trim()) return [];

  const $ = cheerio.load(`<div id="wp-root">${html}</div>`, { decodeEntities: true });
  const root = $("#wp-root").get(0);
  if (!root) return [];

  /** @type {ContentBlock[]} */
  const blocks = [];
  /** @type {Set<import('cheerio').Element>} */
  const processed = new Set();

  $(root)
    .find(BLOCK_SELECTOR)
    .each((_, element) => {
      if (processed.has(element)) return;

      const $el = $(element);
      const ancestors = $el.parents(BLOCK_SELECTOR).toArray();
      if (ancestors.some((ancestor) => processed.has(ancestor))) return;

      const block = extractBlock($, element);
      if (block) {
        blocks.push(block);
        processed.add(element);
        $el.find(BLOCK_SELECTOR).each((__, child) => processed.add(child));
        return;
      }

      blocks.push(extractUnsupported(element));
      processed.add(element);
    });

  if (blocks.length === 0) {
    const text = cheerio.load(html).root().text().trim();
    if (text) {
      blocks.push({
        type: "paragraph",
        data: { content: [{ type: "text", value: text }] },
      });
    }
  }

  return blocks;
}
