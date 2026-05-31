import type { Metadata } from "next";
import Link from "next/link";
import { Leaf, Zap, Heart, Globe } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About NutriTools",
  description: "Learn about NutriTools — free AI-powered nutrition tools built to help everyone eat smarter without the complexity.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <div className="bg-gradient-to-b from-green-50/60 to-white border-b border-gray-100 py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-green-600 rounded-2xl mb-6">
              <Leaf className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About NutriTools</h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              Free AI-powered nutrition tools for everyone — no account, no cost, no complexity.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-16 space-y-16">

          {/* Mission */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Understanding what you eat shouldn't require a nutrition degree, an expensive app subscription, or 30 minutes of manual data entry. We built NutriTools because we believe everyone deserves instant, accurate food intelligence — whether you're a home cook trying to eat healthier, a fitness enthusiast tracking macros, or a parent planning balanced meals for your family.
            </p>
            <p className="text-gray-600 leading-relaxed">
              NutriTools is a free, no-login AI toolkit that does in seconds what used to take hours. Paste any recipe, get a full nutritional breakdown. Describe your goals, get a 7-day meal plan. Name an ingredient, get smart substitutions with explanations. No paywalls, no signup walls — just answers.
            </p>
          </section>

          {/* Values */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">What We Stand For</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Zap,
                  color: "bg-amber-50 text-amber-600",
                  title: "Speed over complexity",
                  desc: "Results in under 10 seconds. No forms, no setup, no learning curve. Paste and go.",
                },
                {
                  icon: Heart,
                  color: "bg-green-50 text-green-600",
                  title: "Accessible to everyone",
                  desc: "Free forever. No credit card. No account. Good nutrition information shouldn't have a paywall.",
                },
                {
                  icon: Globe,
                  color: "bg-blue-50 text-blue-600",
                  title: "Bilingual by design",
                  desc: "Available in English and Chinese. We believe nutrition tools should work for everyone, everywhere.",
                },
                {
                  icon: Leaf,
                  color: "bg-emerald-50 text-emerald-600",
                  title: "Honest and transparent",
                  desc: "We're clear about what AI can and can't do. Results are estimates — we always recommend consulting a dietitian for medical decisions.",
                },
              ].map(({ icon: Icon, color, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technology */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Technology</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              NutriTools is powered by large language model AI with access to nutritional knowledge from sources including the USDA FoodData Central database. When you submit a recipe or request, the AI analyzes your input and returns structured nutritional data in real time.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The platform is built with Next.js and runs on modern web infrastructure designed for speed and reliability. We use streaming responses so you start seeing results within seconds of submitting your request.
            </p>
            <div className="mt-6 p-4 bg-amber-50 border border-amber-100 rounded-xl">
              <p className="text-sm text-amber-800">
                <strong>Accuracy note:</strong> AI-generated nutritional data is an estimate based on standard ingredient profiles. Results may vary based on specific brands, preparation methods, and portion sizes. Always consult a registered dietitian for medical nutrition advice.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center border-t border-gray-100 pt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Ready to try it?</h2>
            <p className="text-gray-500 text-sm mb-6">No signup needed. Just paste your ingredients and go.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/nutrition-analyzer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition-colors">
                Try Nutrition Analyzer
              </Link>
              <Link href="/" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 hover:border-gray-300 text-gray-700 font-medium rounded-xl transition-colors">
                See All Tools
              </Link>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
