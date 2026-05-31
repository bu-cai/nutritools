"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-10 md:p-16 text-center text-white"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("cta_title")}</h2>
            <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">{t("cta_sub")}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/nutrition-analyzer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-colors"
              >
                {t("cta_btn1")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/meal-plan-generator"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-700/50 hover:bg-green-700/70 text-white font-medium rounded-lg border border-white/20 transition-colors"
              >
                {t("cta_btn2")}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
