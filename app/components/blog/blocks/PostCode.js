/** @param {{ code: string, language?: string }} props */
export default function PostCode({ code, language }) {
  return (
    <pre className="post-body__code" data-language={language ?? undefined}>
      <code>{code}</code>
    </pre>
  );
}
