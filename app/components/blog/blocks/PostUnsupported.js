/** @param {{ blockName?: string }} props */
export default function PostUnsupported({ blockName }) {
  if (process.env.NODE_ENV !== "development") return null;

  return (
    <p className="post-body__unsupported" aria-hidden="true">
      [Unsupported block: {blockName ?? "unknown"}]
    </p>
  );
}
