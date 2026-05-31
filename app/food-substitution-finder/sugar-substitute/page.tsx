import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Best Sugar Substitutes for Baking & Cooking — Healthy Alternatives",
  description:
    "Discover the best sugar substitutes for baking including honey, maple syrup, stevia, erythritol, and monk fruit. With conversion ratios and tips for perfect results.",
};

const SUBSTITUTES = [
  { name: "Honey", ratio: "¾ cup per 1 cup sugar (reduce liquid by ¼ cup)", pros: ["Natural sweetener", "Adds moisture", "Complex flavor"], cons: ["Liquid — adjusts recipe", "Higher calories than stevia"], notes: "Reduce oven temperature by 25°F to prevent over-browning." },
  { name: "Maple Syrup", ratio: "¾ cup per 1 cup sugar (reduce liquid by 3 tbsp)", pros: ["Rich caramel flavor", "Natural", "Antioxidants"], cons: ["Expensive", "Liquid form changes texture"], notes: "Wonderful in cookies, granola, and sauces." },
  { name: "Erythritol", ratio: "1:1", pros: ["Zero calories", "No blood sugar spike", "Behaves like sugar"], cons: ["Cooling sensation", "Expensive"], notes: "Best sugar alcohol for baking. Doesn't brown like sugar." },
  { name: "Stevia", ratio: "1 tsp per 1 cup sugar (adjust to taste)", pros: ["Zero calories", "Much sweeter than sugar", "Diabetic-friendly"], cons: ["Bitter aftertaste for some", "No bulk — affects texture"], notes: "Blend with erythritol for best texture results." },
  { name: "Coconut Sugar", ratio: "1:1", pros: ["Lower glycemic index", "Caramel flavor", "Direct swap"], cons: ["Still has calories", "Darker color"], notes: "Works perfectly as a 1:1 replacement in most recipes." },
];

export default function SugarSubstitutePage() {
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
              Healthier Baking Guide
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Best Sugar Substitutes
            </h1>
            <p className="text-lg text-gray-500">
              Reduce calories, manage blood sugar, or simply choose a more natural sweetener. These substitutes keep your recipes sweet without compromise.
            </p>
          </div>

          <div className="space-y-5 mb-12">
            {SUBSTITUTES.map((sub, idx) => (
              <div key={sub.name} className={`rounded-2xl border p-5 ${idx === 0 ? "border-green-300 bg-green-50/30" : "border-gray-100 bg-white"}`}>
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-lg font-semibold text-gray-900">{sub.name}</h2>
                  {idx === 0 && <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Most Natural</span>}
                </div>
                <p className="text-sm font-mono text-gray-700 bg-gray-100 px-3 py-1.5 rounded-lg inline-block mb-3">{sub.ratio}</p>
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
