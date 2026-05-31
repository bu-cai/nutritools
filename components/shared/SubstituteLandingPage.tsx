import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export interface SubstituteItem {
  name: string;
  ratio: string;
  pros: string[];
  cons: string[];
  notes: string;
  tag?: string;
}

interface Props {
  badge: string;
  title: string;
  description: string;
  intro: string;
  substitutes: SubstituteItem[];
  faqs: { q: string; a: string }[];
  relatedPages?: { href: string; title: string }[];
}

export default function SubstituteLandingPage({
  badge, title, description, intro, substitutes, faqs, relatedPages,
}: Props) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-20">
        <div className="max-w-3xl mx-auto px-4 py-12">
          {/* Back link */}
          <Link
            href="/food-substitution-finder"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-green-600 mb-8 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Food Substitution Finder
          </Link>

          {/* Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
              {badge}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-4">{description}</p>
            <p className="text-sm text-gray-500 leading-relaxed">{intro}</p>
          </div>

          {/* Substitutes list */}
          <div className="space-y-5 mb-14">
            {substitutes.map((sub, idx) => (
              <div
                key={sub.name}
                className={`rounded-2xl border p-5 ${
                  idx === 0 ? "border-green-300 bg-green-50/30" : "border-gray-100 bg-white"
                }`}
              >
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <h2 className="text-lg font-semibold text-gray-900">{sub.name}</h2>
                  {(sub.tag ?? (idx === 0 ? "Best Match" : null)) && (
                    <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                      {sub.tag ?? "Best Match"}
                    </span>
                  )}
                </div>
                <p className="text-sm font-mono text-gray-700 bg-gray-100 px-3 py-1.5 rounded-lg inline-block mb-3">
                  {sub.ratio}
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mb-2">
                  <div>
                    {sub.pros.map((p) => (
                      <p key={p} className="text-xs text-green-700 mb-1">✓ {p}</p>
                    ))}
                  </div>
                  <div>
                    {sub.cons.map((c) => (
                      <p key={c} className="text-xs text-red-500 mb-1">✗ {c}</p>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-500 italic">{sub.notes}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          {faqs.length > 0 && (
            <div className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-5">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqs.map(({ q, a }) => (
                  <details key={q} className="border border-gray-100 rounded-xl overflow-hidden group">
                    <summary className="px-4 py-3 cursor-pointer font-medium text-gray-800 hover:bg-gray-50 text-sm list-none flex items-center justify-between">
                      {q}
                      <span className="text-gray-400 text-xs ml-2">▾</span>
                    </summary>
                    <p className="px-4 py-3 text-sm text-gray-500 border-t border-gray-100 leading-relaxed">{a}</p>
                  </details>
                ))}
              </div>
            </div>
          )}

          {/* Related pages */}
          {relatedPages && relatedPages.length > 0 && (
            <div className="mb-14">
              <h2 className="text-xl font-bold text-gray-900 mb-4">More Substitution Guides</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {relatedPages.map(({ href, title: t }) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center justify-between px-4 py-3 bg-white border border-gray-100 rounded-xl hover:border-green-200 hover:bg-green-50/30 transition-colors group"
                  >
                    <span className="text-sm font-medium text-gray-700 group-hover:text-green-700">{t}</span>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-green-500 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-6 text-center text-white">
            <h3 className="text-xl font-bold mb-2">Need a custom substitution?</h3>
            <p className="text-green-100 text-sm mb-4">
              Use our AI tool to find the perfect swap for any ingredient — instantly, for free.
            </p>
            <Link
              href="/food-substitution-finder"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-colors text-sm"
            >
              Try the AI Tool <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
