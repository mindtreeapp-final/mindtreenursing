import { MetadataRoute } from "next";


const BASE_URL = "https://www.mindtreenursing.com";
const STATIC_LAST_MODIFIED = new Date("2026-07-31");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: STATIC_LAST_MODIFIED },
    { url: `${BASE_URL}/blog`, lastModified: STATIC_LAST_MODIFIED },
    {
      url: `${BASE_URL}/blog/the-success-stories-of-nurses-who-have-chosen-mindtree-nursing-solution-for-their-careers`,
      lastModified: STATIC_LAST_MODIFIED,
    },
    {
      url: `${BASE_URL}/blog/why-is-mindtree-nursing-solution-the-best-choice-for-your-career`,
      lastModified: STATIC_LAST_MODIFIED,
    },
    {
      url: `${BASE_URL}/blog/what-is-mindtree-nursing-solution-and-what-it-offers`,
      lastModified: STATIC_LAST_MODIFIED,
    },
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



  return [...staticRoutes];
}
