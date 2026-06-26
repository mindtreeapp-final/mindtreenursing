/** @typedef {import('../../../lib/wordpress/content/types.js').RichTextNode} RichTextNode */

/**
 * @param {string} href
 * @returns {boolean}
 */
function isExternalLink(href) {
  return /^https?:\/\//i.test(href);
}

/**
 * @param {RichTextNode[]} nodes
 */
export default function RichText({ nodes = [] }) {
  return nodes.map((node, index) => {
    if (node.type === "bold") {
      return <strong key={index}>{node.value}</strong>;
    }

    if (node.type === "italic") {
      return <em key={index}>{node.value}</em>;
    }

    if (node.type === "link" && node.href) {
      const external = isExternalLink(node.href);
      return (
        <a
          key={index}
          href={node.href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {node.value}
        </a>
      );
    }

    return <span key={index}>{node.value}</span>;
  });
}
