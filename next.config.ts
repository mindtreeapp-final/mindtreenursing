import type { NextConfig } from "next";

function getWordPressImagePatterns() {
  const apiUrl = process.env.WORDPRESS_API_URL;
  if (!apiUrl) return [];

  try {
    const { protocol, hostname } = new URL(apiUrl);
    if (hostname) {
      return [
        {
          protocol: protocol.replace(":", "") as "http" | "https",
          hostname,
        },
      ];
    }
  } catch {
    return [];
  }

  return [];
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: getWordPressImagePatterns(),
  },
};

export default nextConfig;
