import Image from "next/image";
import RichText from "../RichText.js";

/** @param {{ src: string, alt: string, caption?: import('../../../lib/wordpress/content/types.js').RichTextNode[] }} props */
export default function PostImage({ src, alt, caption }) {
  return (
    <figure className="post-body__figure">
      <div className="post-body__figure-img-wrap">
        <Image
          src={src}
          alt={alt}
          fill
          className="post-body__figure-img"
          sizes="(max-width: 800px) 100vw, 800px"
        />
      </div>
      {caption?.length ? (
        <figcaption className="post-body__figure-caption">
          <RichText nodes={caption} />
        </figcaption>
      ) : null}
    </figure>
  );
}
