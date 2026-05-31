"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function SeoStats() {
  const { t } = useLanguage();

  const STATS = [
    { value: t("stats_s1_v"), label: t("stats_s1_l"), color: "text-green-600" },
    { value: t("stats_s2_v"), label: t("stats_s2_l"), color: "text-blue-600" },
    { value: t("stats_s3_v"), label: t("stats_s3_l"), color: "text-amber-600" },
    { value: t("stats_s4_v"), label: t("stats_s4_l"), color: "text-purple-600" },
  ];

  return (
    <section className="py-16 px-4 bg-white border-y border-gray-100">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className={`text-4xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
