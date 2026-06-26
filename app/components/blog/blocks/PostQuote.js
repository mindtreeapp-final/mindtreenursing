import RichText from "../RichText.js";

/** @param {{ content: import('../../../lib/wordpress/content/types.js').RichTextNode[], citation?: import('../../../lib/wordpress/content/types.js').RichTextNode[] }} props */
export default function PostQuote({ content, citation }) {
  return (
    <blockquote className="post-body__quote">
      <p className="post-body__quote-content">
        <RichText nodes={content} />
      </p>
      {citation?.length ? (
        <cite className="post-body__quote-cite">
          <RichText nodes={citation} />
        </cite>
      ) : null}
    </blockquote>
  );
}
