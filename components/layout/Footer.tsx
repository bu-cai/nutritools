"use client";

import Link from "next/link";
import { Leaf } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const TOOLS = [
    { href: "/nutrition-analyzer", label: t("nav_analyzer") },
    { href: "/meal-plan-generator", label: t("nav_planner") },
    { href: "/food-substitution-finder", label: t("nav_swaps") },
  ];

  const RESOURCES = [
    { href: "/food-substitution-finder/butter-substitute-for-baking", label: t("footer_res1") },
    { href: "/food-substitution-finder/egg-substitute-for-baking", label: t("footer_res2") },
    { href: "/food-substitution-finder/baking-powder-substitute", label: t("footer_res5") },
    { href: "/food-substitution-finder/heavy-cream-substitute", label: t("footer_res6") },
    { href: "/food-substitution-finder/vanilla-extract-substitute", label: t("footer_res7") },
  ];

  const COMPANY = [
    { href: "/about",   label: t("footer_about") },
    { href: "/privacy", label: t("footer_privacy") },
    { href: undefined,  label: t("footer_terms") },
  ];

  return (
    <footer className="border-t border-gray-100 bg-gray-50 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-semibold text-gray-900 mb-3">
              <div className="w-7 h-7 bg-green-600 rounded-lg flex items-center justify-center">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <span>NutriTools</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">{t("footer_tagline")}</p>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">{t("footer_tools")}</h3>
            <ul className="space-y-2">
              {TOOLS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">{t("footer_subs")}</h3>
            <ul className="space-y-2">
              {RESOURCES.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">{t("footer_company")}</h3>
            <ul className="space-y-2">
              {COMPANY.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <Link href={item.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-sm text-gray-400 cursor-default">{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} NutriTools. {t("footer_copyright")}
          </p>
          <p className="text-xs text-gray-400">{t("footer_powered")}</p>
        </div>
      </div>
    </footer>
  );
}
