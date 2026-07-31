import { MetadataRoute } from "next";
import { getAllPostSlugs } from "../lib/wordpress/posts.js";

const BASE_URL = "https://www.mindtreenursing.com";
const STATIC_LAST_MODIFIED = new Date("2026-07-31");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: STATIC_LAST_MODIFIED },
    { url: `${BASE_URL}/blog`, lastModified: STATIC_LAST_MODIFIED },
    { url: `${BASE_URL}/courses`, lastModified: STATIC_LAST_MODIFIED },
    {
      url: `${BASE_URL}/courses/best-oet-coaching-centre-in-kerala`,
      lastModified: STATIC_LAST_MODIFIED,
    },
    {
      url: `${BASE_URL}/courses/best-iqn-coaching`,
      lastModified: STATIC_LAST_MODIFIED,
    },
    {
      url: `${BASE_URL}/courses/best-osce-training`,
      lastModified: STATIC_LAST_MODIFIED,
    },
    { url: `${BASE_URL}/services`, lastModified: STATIC_LAST_MODIFIED },
    {
      url: `${BASE_URL}/services/nursing-registration-in-new-zealand`,
      lastModified: STATIC_LAST_MODIFIED,
    },
    {
      url: `${BASE_URL}/services/pathway-for-registered-nurses-from-the-uk-and-ireland-to-new-zealand`,
      lastModified: STATIC_LAST_MODIFIED,
    },
    { url: `${BASE_URL}/services/cgfns`, lastModified: STATIC_LAST_MODIFIED },
    {
      url: `${BASE_URL}/services/flight-ticketing`,
      lastModified: STATIC_LAST_MODIFIED,
    },
    {
      url: `${BASE_URL}/services/cv-preparation`,
      lastModified: STATIC_LAST_MODIFIED,
    },
    { url: `${BASE_URL}/services/visa`, lastModified: STATIC_LAST_MODIFIED },
    {
      url: `${BASE_URL}/services/accommodation-and-transportation`,
      lastModified: STATIC_LAST_MODIFIED,
    },
    { url: `${BASE_URL}/services/ahpra`, lastModified: STATIC_LAST_MODIFIED },
    { url: `${BASE_URL}/about`, lastModified: STATIC_LAST_MODIFIED },
    { url: `${BASE_URL}/career`, lastModified: STATIC_LAST_MODIFIED },
    { url: `${BASE_URL}/contact`, lastModified: STATIC_LAST_MODIFIED },
    { url: `${BASE_URL}/gallery`, lastModified: STATIC_LAST_MODIFIED },
    { url: `${BASE_URL}/testimonials`, lastModified: STATIC_LAST_MODIFIED },
  ];

  const postSlugs = await getAllPostSlugs();
  const blogRoutes: MetadataRoute.Sitemap = postSlugs.map(({ slug, modified }) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: modified ? new Date(modified) : STATIC_LAST_MODIFIED,
  }));

  return [...staticRoutes, ...blogRoutes];
}
