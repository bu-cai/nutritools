"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const { t } = useLanguage();

  const stats = [
    { value: t("hero_stat1_v"), label: t("hero_stat1_l") },
    { value: t("hero_stat2_v"), label: t("hero_stat2_l") },
    { value: t("hero_stat3_v"), label: t("hero_stat3_l") },
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-20 px-4">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-green-50 to-transparent rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial="hidden" animate="visible" variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full mb-8"
        >
          <Sparkles className="w-3.5 h-3.5" />
          {t("hero_badge")}
        </motion.div>

        {/* Headline — specific & action-oriented */}
        <motion.h1
          initial="hidden" animate="visible" variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight mb-6"
        >
          {t("hero_h1_1")}
          <br />
          <span className="text-green-600">{t("hero_h1_2")}</span>
          <br />
          {t("hero_h1_3")}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial="hidden" animate="visible" variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          {t("hero_sub")}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial="hidden" animate="visible" variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5"
        >
          <Link
            href="/nutrition-analyzer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-green-100 text-base"
          >
            {t("hero_cta1")}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#tools"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-gray-200 hover:border-gray-300 text-gray-700 font-medium rounded-xl transition-all hover:bg-gray-50 text-base"
          >
            {t("hero_cta2")}
          </Link>
        </motion.div>

        {/* Trust micro-copy */}
        <motion.p
          initial="hidden" animate="visible" variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-sm text-gray-400 mb-12"
        >
          {t("hero_trust")}
        </motion.p>

        {/* Stats */}
        <motion.div
          initial="hidden" animate="visible" variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-gray-100 border border-gray-100 rounded-2xl bg-white shadow-sm overflow-hidden max-w-lg mx-auto"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex-1 py-4 px-6 text-center">
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
