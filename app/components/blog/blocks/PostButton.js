/** @param {{ label: string, href: string }} props */
export default function PostButton({ label, href }) {
  return (
    <p className="post-body__button-wrap">
      <a href={href} className="post-body__button" target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    </p>
  );
}
