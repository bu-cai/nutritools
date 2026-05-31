import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Best Milk Substitutes — Dairy-Free Alternatives for Cooking & Baking",
  description:
    "Find the best milk substitute for any recipe. Compare oat milk, almond milk, soy milk, coconut milk and more with exact ratios and use cases.",
};

const SUBSTITUTES = [
  { name: "Oat Milk", ratio: "1:1", pros: ["Closest texture to dairy milk", "Neutral flavor", "Widely available"], cons: ["Higher in carbs", "Less protein than dairy"], notes: "Best all-purpose milk substitute for baking and cooking." },
  { name: "Soy Milk", ratio: "1:1", pros: ["Highest protein of plant milks", "Neutral flavor", "Froths well"], cons: ["Soy allergy concern", "Slight bean flavor"], notes: "Excellent for savory dishes and coffee drinks." },
  { name: "Almond Milk", ratio: "1:1", pros: ["Low calorie", "Light texture", "Mild flavor"], cons: ["Low protein", "Thinner than dairy milk"], notes: "Great for smoothies and light baking." },
  { name: "Coconut Milk (canned)", ratio: "1:1 (dilute if needed)", pros: ["Rich and creamy", "Great in curries", "High fat for creaminess"], cons: ["Coconut flavor", "High in saturated fat"], notes: "Perfect for curries, soups, and desserts." },
  { name: "Cashew Milk", ratio: "1:1", pros: ["Very creamy", "Mild flavor", "Good for sauces"], cons: ["Tree nut allergy risk", "Less available"], notes: "Makes ultra-creamy sauces and soups." },
];

export default function MilkSubstitutePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-20">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <Link href="/food-substitution-finder" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-green-600 mb-8 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Food Substitution Finder
          </Link>

          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
              Dairy-Free Guide
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Best Milk Substitutes
            </h1>
            <p className="text-lg text-gray-500">
              Dairy-free, lactose intolerant, or simply out of milk? These plant-based alternatives work in virtually any recipe.
            </p>
          </div>

          <div className="space-y-5 mb-12">
            {SUBSTITUTES.map((sub, idx) => (
              <div key={sub.name} className={`rounded-2xl border p-5 ${idx === 0 ? "border-green-300 bg-green-50/30" : "border-gray-100 bg-white"}`}>
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-lg font-semibold text-gray-900">{sub.name}</h2>
                  {idx === 0 && <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Best Overall</span>}
                </div>
                <p className="text-sm font-mono text-gray-700 bg-gray-100 px-3 py-1.5 rounded-lg inline-block mb-3">Use {sub.ratio} as a direct swap</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>{sub.pros.map((p) => <p key={p} className="text-xs text-green-700 mb-1">✓ {p}</p>)}</div>
                  <div>{sub.cons.map((c) => <p key={c} className="text-xs text-red-500 mb-1">✗ {c}</p>)}</div>
                </div>
                <p className="text-xs text-gray-500 italic mt-2">{sub.notes}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-6 text-center text-white">
            <h3 className="text-xl font-bold mb-2">Need a custom substitution?</h3>
            <p className="text-green-100 text-sm mb-4">Use our AI tool to find the perfect swap for any ingredient.</p>
            <Link href="/food-substitution-finder" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-colors text-sm">
              Try the AI Tool
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
