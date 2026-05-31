import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Free Nutrition Calculator — Instant Calories & Macros for Any Recipe",
  description:
    "Paste any recipe ingredients and get instant calories, protein, carbs & fat. Free AI nutrition calculator — no account, no app, results in 10 seconds.",
  keywords: [
    "recipe nutrition calculator",
    "calorie calculator",
    "macro calculator",
    "nutrition analyzer",
    "free calorie counter",
    "ingredient nutrition lookup",
  ],
  openGraph: {
    title: "Free Nutrition Calculator — Instant Results from Any Recipe",
    description:
      "Paste ingredients, get full nutrition facts in 10 seconds. Calories, protein, carbs, fat, fiber & more. 100% free, no signup.",
    type: "website",
    url: "https://nutritools.ai/nutrition-analyzer",
  },
  alternates: { canonical: "https://nutritools.ai/nutrition-analyzer" },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "NutriTools Recipe Nutrition Calculator",
    url: "https://nutritools.ai/nutrition-analyzer",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web Browser",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Free AI-powered recipe nutrition calculator. Calculate calories, protein, carbs, and fat from any ingredient list instantly. No account required.",
    featureList: [
      "Instant calorie counting",
      "Macro nutrient breakdown",
      "Per-serving calculation",
      "Health insights",
      "No account required",
      "Bilingual (English & Chinese)",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How accurate is the recipe nutrition calculator?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our AI provides estimates based on standard nutritional databases including USDA FoodData Central. Results are close to professional nutrition labels but may vary slightly depending on ingredient brands and preparation methods.",
        },
      },
      {
        "@type": "Question",
        name: "Can I calculate nutrition for homemade recipes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! This tool is ideal for homemade recipes. Just list each ingredient with its quantity and our AI will calculate the full nutritional profile.",
        },
      },
      {
        "@type": "Question",
        name: "Does it work without an account?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Completely free and no account required. Just enter your ingredients and get instant results.",
        },
      },
      {
        "@type": "Question",
        name: "What macros does it track?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It tracks calories, protein, carbohydrates, fat, fiber, and sugar — plus gives a macro percentage breakdown and personalized health insights.",
        },
      },
    ],
  },
];

export default function NutritionLayout({ children }: { children: ReactNode }) {
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
