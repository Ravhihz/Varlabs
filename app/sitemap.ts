import type { MetadataRoute } from "next";

const BASE_URL = "https://varlabs.my.id";

// Live products under the varlabs subdomain umbrella
const LIVE_PRODUCTS = [
  { path: "https://varion.varlabs.my.id",   changeFreq: "weekly"  as const, priority: 0.9 },
  { path: "https://feascale.varlabs.my.id", changeFreq: "monthly" as const, priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const rootRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/#products`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/#principles`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/#about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const productRoutes: MetadataRoute.Sitemap = LIVE_PRODUCTS.map((p) => ({
    url: p.path,
    lastModified: now,
    changeFrequency: p.changeFreq,
    priority: p.priority,
  }));

  return [...rootRoutes, ...productRoutes];
}
