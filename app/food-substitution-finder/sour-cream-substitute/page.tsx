import type { Metadata } from "next";
import SubstituteLandingPage from "@/components/shared/SubstituteLandingPage";

export const metadata: Metadata = {
  title: "Best Sour Cream Substitutes — 5 Options for Baking, Dips & Cooking",
  description:
    "Out of sour cream? Discover 5 substitutes including Greek yogurt, cream cheese, and crème fraîche — with exact ratios for baking, dips, sauces, and toppings.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Sour Cream Substitutes",
  description: "5 sour cream substitutes for baking, dips, sauces, and toppings with exact ratios.",
  url: "https://nutritools.ai/food-substitution-finder/sour-cream-substitute",
};

const SUBSTITUTES = [
  {
    name: "Greek Yogurt (Plain, Full-Fat)",
    ratio: "1:1 replacement",
    pros: ["Near-identical tang and creaminess", "Higher protein", "Lower fat option available"],
    cons: ["Slightly thinner — strain through cheesecloth if needed", "May curdle at very high heat"],
    notes: "The best all-purpose substitute for sour cream. Full-fat Greek yogurt is almost indistinguishable in dips, baked goods, and toppings. Add off heat in hot sauces.",
  },
  {
    name: "Crème Fraîche",
    ratio: "1:1 replacement",
    pros: ["Richer, creamier texture", "Doesn't curdle at high heat", "Luxurious flavor"],
    cons: ["More expensive", "Less tangy than sour cream", "Higher fat content"],
    notes: "The best substitute for cooking in hot dishes — it's heat-stable and won't separate. Slightly less tangy, so add a small squeeze of lemon juice if you want to match the acidity.",
  },
  {
    name: "Cream Cheese (Thinned)",
    ratio: "6 oz cream cheese + 2 tbsp milk + 1 tbsp lemon juice = 1 cup sour cream",
    pros: ["Very creamy and thick", "Great in dips and baked goods", "Familiar flavor"],
    cons: ["Less tangy than sour cream", "Requires thinning", "Higher in fat"],
    notes: "Blend until completely smooth for the best texture. Works especially well as a sour cream substitute in cheesecakes, dips, and frosting.",
  },
  {
    name: "Buttermilk",
    ratio: "¾ cup buttermilk = 1 cup sour cream (reduce other liquid in recipe)",
    pros: ["Similar tangy flavor", "Widely available", "Great for baking"],
    cons: ["Much thinner consistency", "Doesn't work as a topping or dip"],
    notes: "Works well in baked goods (cakes, pancakes, muffins) where the consistency difference doesn't matter. Not suitable as a topping or in thick dips.",
  },
  {
    name: "Cottage Cheese (Blended)",
    ratio: "1 cup cottage cheese + 1 tbsp lemon juice, blended smooth = 1 cup sour cream",
    pros: ["Lower fat and calories", "High protein", "Neutral flavor when blended"],
    cons: ["Requires blending until very smooth", "Less creamy texture"],
    notes: "Blend at high speed for at least 60 seconds to eliminate all lumps. Works in dips, baked potatoes, and dressings. Use full-fat cottage cheese for the creamiest result.",
  },
];

const FAQS = [
  {
    q: "What's the best sour cream substitute for baking?",
    a: "Full-fat Greek yogurt is the best baking substitute — it has similar acidity, fat content, and consistency. It works seamlessly in cakes, muffins, quick breads, and cheesecakes.",
  },
  {
    q: "Can I substitute sour cream in beef stroganoff?",
    a: "Yes — crème fraîche is the best option for hot dishes like stroganoff because it's heat-stable and won't curdle. Greek yogurt works too but add it off the heat just before serving.",
  },
  {
    q: "Is Greek yogurt healthier than sour cream?",
    a: "Generally yes. Plain Greek yogurt has about 60% fewer calories, less fat, and significantly more protein than regular sour cream. Full-fat Greek yogurt is still lower in fat than most sour creams.",
  },
];

const RELATED = [
  { href: "/food-substitution-finder/heavy-cream-substitute", title: "Heavy Cream Substitutes" },
  { href: "/food-substitution-finder/milk-substitute", title: "Milk Substitutes" },
  { href: "/food-substitution-finder/butter-substitute-for-baking", title: "Butter Substitutes" },
  { href: "/food-substitution-finder/egg-substitute-for-baking", title: "Egg Substitutes" },
];

export default function SourCreamSubstitutePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SubstituteLandingPage
        badge="Cooking & Baking Guide"
        title="Best Sour Cream Substitutes"
        description="Out of sour cream? These alternatives work for baking, dips, sauces, toppings, and everything in between."
        intro="Sour cream gets its signature tang from lactic acid bacteria that ferment the cream. It's used in baking for moisture and tenderness, in dips for creaminess, and as a cooling topping for spicy dishes. The best substitute depends on how you're using it — here are 5 options for every scenario."
        substitutes={SUBSTITUTES}
        faqs={FAQS}
        relatedPages={RELATED}
      />
    </>
  );
}
