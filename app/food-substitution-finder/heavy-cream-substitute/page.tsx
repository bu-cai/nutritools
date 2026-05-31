import type { Metadata } from "next";
import SubstituteLandingPage from "@/components/shared/SubstituteLandingPage";

export const metadata: Metadata = {
  title: "Best Heavy Cream Substitutes — 5 Options for Cooking & Baking",
  description:
    "Need a heavy cream substitute? Find 5 easy alternatives including milk + butter, coconut cream, and half-and-half. Works for soups, sauces, whipping & baking.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Heavy Cream Substitutes",
  description: "5 heavy cream substitutes for cooking, baking, and whipping with exact ratios.",
  url: "https://nutritools.ai/food-substitution-finder/heavy-cream-substitute",
};

const SUBSTITUTES = [
  {
    name: "Whole Milk + Butter",
    ratio: "¾ cup whole milk + ¼ cup melted unsalted butter = 1 cup heavy cream",
    pros: ["Very close flavor and fat content", "Works in most recipes", "Always available"],
    cons: ["Cannot be whipped to stiff peaks", "Slightly thinner consistency"],
    notes: "The go-to substitute for cooking and baking. Melt the butter first, then whisk it into the milk. Not ideal for whipped cream.",
  },
  {
    name: "Coconut Cream",
    ratio: "1:1 replacement",
    pros: ["Dairy-free & vegan", "Whips well when chilled", "Rich and creamy texture"],
    cons: ["Adds coconut flavor", "Changes taste in savory dishes"],
    notes: "Refrigerate the can overnight — the cream separates and rises to the top. Perfect for dairy-free whipped cream and desserts.",
  },
  {
    name: "Half-and-Half + Butter",
    ratio: "⅞ cup half-and-half + ⅛ cup melted butter = 1 cup heavy cream",
    pros: ["Closest non-dairy substitute", "Mild flavor", "Lower in calories than heavy cream"],
    cons: ["Still contains dairy", "Cannot be whipped to stiff peaks"],
    notes: "Works well in soups, sauces, and baked goods. Adds richness without the full fat of heavy cream.",
  },
  {
    name: "Greek Yogurt + Milk",
    ratio: "½ cup Greek yogurt + ½ cup whole milk, blended smooth = 1 cup heavy cream",
    pros: ["Higher protein", "Tangy, complex flavor", "Thicker consistency"],
    cons: ["Tangier taste", "May curdle at very high heat"],
    notes: "Great in dips, dressings, and baked goods. Add it off heat in cooked sauces to prevent curdling.",
  },
  {
    name: "Silken Tofu + Soy Milk",
    ratio: "½ cup blended silken tofu + ½ cup soy milk = 1 cup heavy cream",
    pros: ["Fully vegan", "High protein", "Neutral flavor"],
    cons: ["Doesn't whip", "Slightly grainy if not fully blended"],
    notes: "Blend until completely smooth for the best results. Best in soups, pasta sauces, and casseroles.",
  },
];

const FAQS = [
  {
    q: "Can I substitute heavy cream with regular milk?",
    a: "Regular milk alone is too thin — it has about 3.5% fat vs. heavy cream's 36%+. For best results, combine ¾ cup milk with ¼ cup melted butter to match the fat content.",
  },
  {
    q: "What's the best heavy cream substitute for whipping?",
    a: "Full-fat coconut cream is the best option for dairy-free whipped cream. Chill the can overnight, scoop out the solid cream, and whip with a hand mixer. It won't be as stable as dairy whipped cream but works well.",
  },
  {
    q: "Can I substitute heavy cream in pasta sauces?",
    a: "Yes — milk + butter or half-and-half + butter both work well in creamy pasta sauces like Alfredo. Add them on low heat and don't bring to a rolling boil to avoid separation.",
  },
];

const RELATED = [
  { href: "/food-substitution-finder/milk-substitute", title: "Milk Substitutes" },
  { href: "/food-substitution-finder/butter-substitute-for-baking", title: "Butter Substitutes" },
  { href: "/food-substitution-finder/sour-cream-substitute", title: "Sour Cream Substitutes" },
  { href: "/food-substitution-finder/sugar-substitute", title: "Sugar Substitutes" },
];

export default function HeavyCreamSubstitutePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SubstituteLandingPage
        badge="Cooking & Baking Guide"
        title="Best Heavy Cream Substitutes"
        description="Out of heavy cream? These alternatives work for soups, sauces, baking, and even whipping — dairy and dairy-free options included."
        intro="Heavy cream (also called heavy whipping cream) has a fat content of 36–40%, which gives it its rich body and ability to whip. When substituting, your goal is to match that fat content and consistency as closely as possible. The right substitute depends on whether you need to whip the cream, cook with it, or bake it."
        substitutes={SUBSTITUTES}
        faqs={FAQS}
        relatedPages={RELATED}
      />
    </>
  );
}
