/** @param {{ label: string, href: string }} props */
export default function PostButton({ label, href }) {
  const external = /^https?:\/\//i.test(href);

  return (
    <p className="post-body__button-wrap">
      <a
        href={href}
        className="post-body__button"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {label}
      </a>
    </p>
  );
}
