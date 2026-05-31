import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nutritools.ai";

  const toolPages = [
    { path: "", priority: 1.0, freq: "weekly" },
    { path: "/nutrition-analyzer", priority: 0.9, freq: "monthly" },
    { path: "/meal-plan-generator", priority: 0.9, freq: "monthly" },
    { path: "/food-substitution-finder", priority: 0.9, freq: "monthly" },
    { path: "/about", priority: 0.6, freq: "yearly" },
    { path: "/privacy", priority: 0.4, freq: "yearly" },
  ] as const;

  const substitutionPages = [
    "/food-substitution-finder/butter-substitute-for-baking",
    "/food-substitution-finder/egg-substitute-for-baking",
    "/food-substitution-finder/milk-substitute",
    "/food-substitution-finder/sugar-substitute",
    "/food-substitution-finder/baking-powder-substitute",
    "/food-substitution-finder/heavy-cream-substitute",
    "/food-substitution-finder/vanilla-extract-substitute",
    "/food-substitution-finder/vegetable-oil-substitute",
    "/food-substitution-finder/sour-cream-substitute",
  ];

  return [
    ...toolPages.map(({ path, priority, freq }) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: freq as MetadataRoute.Sitemap[number]["changeFrequency"],
      priority,
    })),
    ...substitutionPages.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
