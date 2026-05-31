"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Leaf } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggle, t } = useLanguage();

  const NAV_LINKS = [
    { href: "/nutrition-analyzer", label: t("nav_analyzer") },
    { href: "/meal-plan-generator", label: t("nav_planner") },
    { href: "/food-substitution-finder", label: t("nav_swaps") },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold text-gray-900">
          <div className="w-7 h-7 bg-green-600 rounded-lg flex items-center justify-center">
            <Leaf className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg">NutriTools</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + lang toggle + burger */}
        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <button
            onClick={toggle}
            className="hidden md:flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg border border-gray-200 hover:border-green-300 hover:text-green-700 transition-colors text-gray-600"
            title={lang === "en" ? "切换中文" : "Switch to English"}
          >
            <span className={lang === "en" ? "text-green-600" : "text-gray-400"}>EN</span>
            <span className="text-gray-300 mx-0.5">/</span>
            <span className={lang === "zh" ? "text-green-600" : "text-gray-400"}>中</span>
          </button>

          <Link
            href="/nutrition-analyzer"
            className="hidden md:inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            {t("nav_try")}
          </Link>
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-700 hover:text-green-600 py-2 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {/* Mobile lang toggle */}
          <button
            onClick={() => { toggle(); setMenuOpen(false); }}
            className="flex items-center gap-2 py-2 text-sm text-gray-600"
          >
            <span className={lang === "en" ? "font-semibold text-green-600" : "text-gray-400"}>English</span>
            <span className="text-gray-300">/</span>
            <span className={lang === "zh" ? "font-semibold text-green-600" : "text-gray-400"}>中文</span>
          </button>
          <Link
            href="/nutrition-analyzer"
            className="mt-1 w-full text-center px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {t("nav_try")}
          </Link>
        </div>
      )}
    </header>
  );
}
