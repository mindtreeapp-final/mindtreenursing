import { BLOCK_COMPONENTS } from "./blocks/index.js";
import PostUnsupported from "./blocks/PostUnsupported.js";

/** @param {{ blocks: import('../../lib/wordpress/content/types.js').ContentBlock[] }} props */
export default function PostBody({ blocks = [] }) {
  return (
    <article className="post-body post-article">
      {blocks.map((block, index) => {
        const Component = BLOCK_COMPONENTS[block.type] ?? PostUnsupported;
        return <Component key={`${block.type}-${index}`} {...block.data} />;
      })}
    </article>
  );
}
