import type { Metadata } from "next";
import SubstituteLandingPage from "@/components/shared/SubstituteLandingPage";

export const metadata: Metadata = {
  title: "Best Baking Powder Substitutes — 5 Easy Alternatives with Ratios",
  description:
    "Ran out of baking powder? Discover 5 proven substitutes including baking soda + cream of tartar, buttermilk, and self-rising flour. With exact ratios and baking tips.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Baking Powder Substitutes",
  description: "5 proven baking powder substitutes with exact ratios and tips for perfect baked goods.",
  url: "https://nutritools.ai/food-substitution-finder/baking-powder-substitute",
};

const SUBSTITUTES = [
  {
    name: "Baking Soda + Cream of Tartar",
    ratio: "¼ tsp baking soda + ½ tsp cream of tartar = 1 tsp baking powder",
    pros: ["Closest chemical equivalent", "Neutral flavor", "Works in all recipes"],
    cons: ["Requires two ingredients", "Cream of tartar not always on hand"],
    notes: "This is the gold-standard substitute — it replicates baking powder's two-stage leavening reaction almost perfectly.",
  },
  {
    name: "Baking Soda + Buttermilk",
    ratio: "¼ tsp baking soda per 1 tsp baking powder (reduce other liquids by ½ cup)",
    pros: ["Adds moisture and tenderness", "Enhances flavor in cakes", "Very accessible"],
    cons: ["Adds slight tang", "Requires adjusting liquid ratios"],
    notes: "Works beautifully in pancakes, quick breads, and muffins. The acid in buttermilk activates the baking soda.",
  },
  {
    name: "Baking Soda + Plain Yogurt",
    ratio: "¼ tsp baking soda per 1 tsp baking powder (add ½ cup yogurt, reduce other liquid)",
    pros: ["Adds richness and protein", "Creates tender crumb", "Great in chocolate cake"],
    cons: ["Changes texture slightly", "Adds moisture"],
    notes: "Greek yogurt works especially well — its acidity activates the baking soda effectively.",
  },
  {
    name: "Baking Soda + White Vinegar",
    ratio: "¼ tsp baking soda + ½ tsp white vinegar = 1 tsp baking powder",
    pros: ["Always available", "Neutral taste when baked", "Powerful leavening"],
    cons: ["Must work fast (reacts immediately)", "Slight vinegar smell before baking"],
    notes: "Add the vinegar last and get the batter into the oven quickly — the reaction starts immediately.",
  },
  {
    name: "Self-Rising Flour",
    ratio: "Replace 1 cup all-purpose flour + 1 tsp baking powder with 1 cup self-rising flour (omit salt)",
    pros: ["Simple 1-ingredient swap", "Already balanced for baking", "Consistent results"],
    cons: ["Requires replacing all flour", "Less control over leavening level"],
    notes: "Best when your recipe uses a standard amount of baking powder. Reduce or omit any added salt.",
  },
];

const FAQS = [
  {
    q: "Can I use baking soda instead of baking powder?",
    a: "Not directly 1:1 — baking soda is about 3–4x stronger. Use ¼ teaspoon of baking soda for every 1 teaspoon of baking powder, but you also need an acid (cream of tartar, buttermilk, yogurt, or vinegar) to activate it.",
  },
  {
    q: "What happens if I skip baking powder entirely?",
    a: "Your baked goods won't rise properly and will come out flat and dense. Leavening agents are essential for most cakes, muffins, and quick breads.",
  },
  {
    q: "Does baking powder expire?",
    a: "Yes. Baking powder loses potency after 6–12 months. Test it by adding 1 teaspoon to ⅓ cup hot water — it should bubble vigorously. If it barely bubbles, replace it.",
  },
];

const RELATED = [
  { href: "/food-substitution-finder/butter-substitute-for-baking", title: "Butter Substitutes for Baking" },
  { href: "/food-substitution-finder/egg-substitute-for-baking", title: "Egg Substitutes for Baking" },
  { href: "/food-substitution-finder/vanilla-extract-substitute", title: "Vanilla Extract Substitutes" },
  { href: "/food-substitution-finder/milk-substitute", title: "Milk Substitutes" },
];

export default function BakingPowderSubstitutePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SubstituteLandingPage
        badge="Baking Guide"
        title="Best Baking Powder Substitutes"
        description="Ran out of baking powder mid-recipe? Don't panic. These tried-and-tested alternatives will save your bake."
        intro="Baking powder is a leavening agent that makes baked goods rise by releasing carbon dioxide gas. It contains baking soda, cream of tartar (an acid), and cornstarch. Any substitute needs to replicate this acid–base reaction. Here are the 5 best options, ordered by effectiveness."
        substitutes={SUBSTITUTES}
        faqs={FAQS}
        relatedPages={RELATED}
      />
    </>
  );
}
