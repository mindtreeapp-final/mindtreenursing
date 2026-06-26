import RichText from "../RichText.js";

/** @param {{ level: number, content: import('../../../lib/wordpress/content/types.js').RichTextNode[] }} props */
export default function PostHeading({ level, content }) {
  const clamped = Math.min(Math.max(level, 2), 4);
  const className = `post-body__heading post-body__heading--h${clamped}`;

  const body = <RichText nodes={content} />;

  if (clamped === 2) return <h2 className={className}>{body}</h2>;
  if (clamped === 3) return <h3 className={className}>{body}</h3>;
  return <h4 className={className}>{body}</h4>;
}
