import type { Metadata } from "next";
import SubstituteLandingPage from "@/components/shared/SubstituteLandingPage";

export const metadata: Metadata = {
  title: "Best Vegetable Oil Substitutes for Baking — 5 Healthier Alternatives",
  description:
    "Find the best vegetable oil substitute for baking. Applesauce, butter, coconut oil, avocado oil & more — with exact ratios and tips for moist, delicious results.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Vegetable Oil Substitutes for Baking",
  description: "5 vegetable oil substitutes for baking with exact ratios for moist cakes, muffins, and more.",
  url: "https://nutritools.ai/food-substitution-finder/vegetable-oil-substitute",
};

const SUBSTITUTES = [
  {
    name: "Melted Butter",
    ratio: "7/8 cup (14 tbsp) melted butter = 1 cup vegetable oil",
    pros: ["Richer flavor", "Familiar pantry staple", "Works in almost any recipe"],
    cons: ["Higher saturated fat", "Adds butter flavor (usually a plus)", "Slightly heavier texture"],
    notes: "The most versatile swap. Use unsalted butter and melt it completely before measuring. Produces slightly denser baked goods with a richer taste.",
  },
  {
    name: "Applesauce (Unsweetened)",
    ratio: "1:1 replacement (swap cup for cup)",
    pros: ["Reduces fat by ~80%", "Adds natural sweetness and moisture", "Works great in muffins & quick breads"],
    cons: ["Denser, slightly gummy texture", "Adds mild apple flavor", "Not ideal for crispy results"],
    notes: "One of the best low-fat substitutes for baking. Use unsweetened to avoid making the recipe too sweet. Best in muffins, banana bread, and brownies.",
  },
  {
    name: "Coconut Oil",
    ratio: "1:1 replacement (melted)",
    pros: ["Same consistency as vegetable oil", "Vegan-friendly", "Adds subtle coconut sweetness"],
    cons: ["Solidifies when cold", "Mild coconut flavor in delicate recipes"],
    notes: "Use refined coconut oil to minimize coconut flavor. Melt before measuring. Works in virtually every baking recipe that calls for vegetable oil.",
  },
  {
    name: "Avocado Oil",
    ratio: "1:1 replacement",
    pros: ["Heart-healthy monounsaturated fats", "Very neutral flavor", "High smoke point"],
    cons: ["More expensive", "Greenish color in large amounts"],
    notes: "One of the healthiest 1:1 swaps available. Virtually tasteless in baked goods. Also excellent for sautéing and roasting.",
  },
  {
    name: "Greek Yogurt",
    ratio: "¾ cup Greek yogurt = 1 cup vegetable oil",
    pros: ["High protein, lower fat", "Keeps baked goods very moist", "Adds slight tanginess"],
    cons: ["Changes texture (more dense and moist)", "Slight tang in delicate flavors"],
    notes: "Works particularly well in chocolate cake, muffins, and carrot cake where the extra moisture is welcome. Full-fat Greek yogurt gives the best results.",
  },
];

const FAQS = [
  {
    q: "Can I substitute olive oil for vegetable oil in baking?",
    a: "Yes, 1:1. Extra-virgin olive oil has a more pronounced flavor that can affect delicate baked goods. Use light olive oil (mild flavor) for best results in cakes and muffins.",
  },
  {
    q: "What's the healthiest substitute for vegetable oil in baking?",
    a: "Avocado oil is the healthiest 1:1 swap — high in heart-healthy monounsaturated fats with a neutral taste. Applesauce is the best option if you want to dramatically reduce fat content.",
  },
  {
    q: "Can I use water instead of vegetable oil?",
    a: "In a pinch, yes — for simple box cakes and muffins you can replace vegetable oil with an equal amount of water, though the result will be less moist and rich. Always better to use one of the fat-based substitutes above.",
  },
];

const RELATED = [
  { href: "/food-substitution-finder/butter-substitute-for-baking", title: "Butter Substitutes for Baking" },
  { href: "/food-substitution-finder/egg-substitute-for-baking", title: "Egg Substitutes for Baking" },
  { href: "/food-substitution-finder/heavy-cream-substitute", title: "Heavy Cream Substitutes" },
  { href: "/food-substitution-finder/baking-powder-substitute", title: "Baking Powder Substitutes" },
];

export default function VegetableOilSubstitutePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SubstituteLandingPage
        badge="Baking Guide"
        title="Best Vegetable Oil Substitutes for Baking"
        description="Whether you've run out of vegetable oil or want a healthier option, these substitutes keep your bakes moist, tender, and delicious."
        intro="Vegetable oil is used in baking for its neutral flavor and ability to add moisture and tenderness to cakes, muffins, and quick breads. Unlike butter, it stays liquid at room temperature, which helps keep baked goods moist for longer. Here are the 5 best substitutes, each with pros, cons, and exact ratios."
        substitutes={SUBSTITUTES}
        faqs={FAQS}
        relatedPages={RELATED}
      />
    </>
  );
}
