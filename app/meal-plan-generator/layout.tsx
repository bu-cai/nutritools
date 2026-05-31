import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Free 7-Day Meal Plan Generator — Custom Diet Plans in 30 Seconds",
  description:
    "Generate a personalized 7-day meal plan based on your goal (fat loss, muscle gain), calorie target, and dietary restrictions. Free AI tool, no signup required.",
  keywords: [
    "meal plan generator",
    "7 day meal plan",
    "weight loss meal plan",
    "muscle gain meal plan",
    "free meal planner",
    "AI diet plan",
    "vegetarian meal plan",
  ],
  openGraph: {
    title: "Free 7-Day Meal Plan Generator — Personalized in 30 Seconds",
    description:
      "Set your goal, calories, and restrictions. Get a complete 7-day meal plan with shopping list instantly. Free, no account needed.",
    type: "website",
    url: "https://nutritools.ai/meal-plan-generator",
  },
  alternates: { canonical: "https://nutritools.ai/meal-plan-generator" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "NutriTools 7-Day Meal Plan Generator",
  url: "https://nutritools.ai/meal-plan-generator",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web Browser",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Free AI-powered meal plan generator. Create a personalized 7-day meal plan with shopping list based on your fitness goal, daily calorie target, and dietary restrictions.",
  featureList: [
    "7-day personalized meal plans",
    "Fat loss, muscle gain, maintenance, vegetarian goals",
    "Adjustable calorie targets (1,200–3,500 kcal)",
    "Dietary restriction support",
    "Built-in shopping list",
    "No account required",
  ],
};

export default function MealPlanLayout({ children }: { children: ReactNode }) {
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
