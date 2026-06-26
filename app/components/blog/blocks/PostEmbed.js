/** @param {{ provider: 'youtube' | 'vimeo', url: string, embedUrl: string }} props */
export default function PostEmbed({ provider, url, embedUrl }) {
  return (
    <figure className="post-body__embed">
      <div className="post-body__embed-wrap">
        <iframe
          src={embedUrl}
          title={`${provider} embed`}
          className="post-body__embed-iframe"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {url ? (
        <figcaption className="post-body__embed-caption">
          <a href={url} target="_blank" rel="noopener noreferrer">
            View on {provider === "youtube" ? "YouTube" : "Vimeo"}
          </a>
        </figcaption>
      ) : null}
    </figure>
  );
}
