import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Food Substitution Finder — Instant Ingredient Swap Ideas",
  description:
    "Find the best substitute for any ingredient — for allergies, dietary needs, or when you've run out. AI-powered tool covering butter, eggs, milk, flour & 500+ more swaps. Free, no account.",
  keywords: [
    "food substitution",
    "ingredient substitute",
    "cooking substitute",
    "baking substitutes",
    "food swap",
    "ingredient replacement",
    "dairy free substitute",
    "vegan substitute",
  ],
  openGraph: {
    title: "Food Substitution Finder — 500+ Ingredient Swaps",
    description:
      "Type any ingredient, get the best alternatives with exact ratios. Works for allergies, diets, and out-of-stock situations. Free AI tool.",
    type: "website",
    url: "https://nutritools.ai/food-substitution-finder",
  },
  alternates: { canonical: "https://nutritools.ai/food-substitution-finder" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "NutriTools Food Substitution Finder",
  url: "https://nutritools.ai/food-substitution-finder",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web Browser",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Free AI-powered food substitution tool. Find the perfect ingredient swap for baking, cooking, allergies, or dietary restrictions. Get exact ratios and preparation tips.",
  featureList: [
    "500+ ingredient substitutions",
    "Exact replacement ratios",
    "Allergy-friendly alternatives",
    "Vegan and dairy-free swaps",
    "Context-aware suggestions (baking vs cooking)",
    "No account required",
  ],
};

export default function SubstitutionLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
