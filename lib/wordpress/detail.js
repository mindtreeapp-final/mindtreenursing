import { parseContentToBlocks } from "./content/parseContentToBlocks.js";
import { normalizePostSummary } from "./normalize.js";

/**
 * @param {Record<string, unknown>} raw
 * @returns {import('./content/types.js').PostDetail}
 */
export function normalizePostDetail(raw) {
  const summary = normalizePostSummary(raw);

  return {
    ...summary,
    blocks: parseContentToBlocks(raw.content?.rendered ?? ""),
  };
}
