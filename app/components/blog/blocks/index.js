import PostParagraph from "./PostParagraph.js";
import PostHeading from "./PostHeading.js";
import PostList from "./PostList.js";
import PostImage from "./PostImage.js";
import PostQuote from "./PostQuote.js";
import PostEmbed from "./PostEmbed.js";
import PostButton from "./PostButton.js";
import PostSeparator from "./PostSeparator.js";
import PostCode from "./PostCode.js";
import PostUnsupported from "./PostUnsupported.js";

export const BLOCK_COMPONENTS = {
  paragraph: PostParagraph,
  heading: PostHeading,
  list: PostList,
  image: PostImage,
  quote: PostQuote,
  embed: PostEmbed,
  button: PostButton,
  separator: PostSeparator,
  code: PostCode,
  unsupported: PostUnsupported,
};
