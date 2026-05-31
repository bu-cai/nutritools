"use client";

import { motion } from "framer-motion";
import { ClipboardList, Cpu, CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();

  const STEPS = [
    { icon: ClipboardList, title: t("how1_title"), description: t("how1_desc") },
    { icon: Cpu,           title: t("how2_title"), description: t("how2_desc") },
    { icon: CheckCircle,   title: t("how3_title"), description: t("how3_desc") },
  ];

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-bold text-white mb-3">{t("how_title")}</h2>
          <p className="text-gray-400 text-lg">{t("how_sub")}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="text-center"
              >
                <div className="relative inline-flex items-center justify-center mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-green-500" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white">{idx + 1}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
