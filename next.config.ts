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
    // Local WP hosts (e.g. mindtree.local → 127.0.0.1) are blocked by default in Next.js 16
    dangerouslyAllowLocalIP: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
