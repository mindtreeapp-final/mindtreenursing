import RichText from "../RichText.js";

/** @param {{ content: import('../../../lib/wordpress/content/types.js').RichTextNode[] }} props */
export default function PostParagraph({ content }) {
  return (
    <p className="post-body__paragraph post-para">
      <RichText nodes={content} />
    </p>
  );
}
