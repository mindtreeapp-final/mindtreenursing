import RichText from "../RichText.js";

/** @param {{ ordered: boolean, items: import('../../../lib/wordpress/content/types.js').RichTextNode[][] }} props */
export default function PostList({ ordered, items }) {
  const Tag = ordered ? "ol" : "ul";

  return (
    <Tag className={`post-body__list${ordered ? " post-body__list--ordered" : ""}`}>
      {items.map((item, index) => (
        <li key={index} className="post-body__list-item">
          <RichText nodes={item} />
        </li>
      ))}
    </Tag>
  );
}
