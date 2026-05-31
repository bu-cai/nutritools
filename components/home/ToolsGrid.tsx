"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calculator, Calendar, RefreshCw, ArrowRight, TrendingUp } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ToolsGrid() {
  const { t } = useLanguage();

  const TOOLS = [
    {
      icon: Calculator,
      iconBg: "bg-green-100", iconColor: "text-green-600",
      href: "/nutrition-analyzer",
      title: t("tool1_title"), desc: t("tool1_desc"),
      preview: { input: t("tool1_preview_in"), output: t("tool1_preview_out") },
      seoBadge: t("tool1_seo"),
    },
    {
      icon: Calendar,
      iconBg: "bg-amber-100", iconColor: "text-amber-600",
      href: "/meal-plan-generator",
      title: t("tool2_title"), desc: t("tool2_desc"),
      preview: { input: t("tool2_preview_in"), output: t("tool2_preview_out") },
      seoBadge: t("tool2_seo"),
    },
    {
      icon: RefreshCw,
      iconBg: "bg-blue-100", iconColor: "text-blue-600",
      href: "/food-substitution-finder",
      title: t("tool3_title"), desc: t("tool3_desc"),
      preview: { input: t("tool3_preview_in"), output: t("tool3_preview_out") },
      seoBadge: t("tool3_seo"),
    },
  ];

  return (
    <section id="tools" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{t("tools_title")}</h2>
          <p className="text-gray-500 text-lg">{t("tools_sub")}</p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {TOOLS.map((tool) => {
            const Icon = tool.icon;
            return (
              <motion.div key={tool.href} variants={cardVariant}>
                <Link href={tool.href} className="group block">
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 h-full hover:shadow-lg hover:shadow-gray-100/80 hover:-translate-y-1 transition-all duration-300">
                    <div className={`w-10 h-10 ${tool.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className={`w-5 h-5 ${tool.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-5">{tool.desc}</p>
                    <div className="bg-gray-50 rounded-lg p-3 mb-5 text-xs font-mono space-y-1">
                      <div className="text-gray-400"><span className="text-gray-300 mr-1">›</span>{tool.preview.input}</div>
                      <div className="text-green-600 font-medium"><span className="text-gray-300 mr-1">←</span>{tool.preview.output}</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 text-xs text-gray-400 bg-gray-50 border border-gray-100 px-2 py-1 rounded-md">
                        <TrendingUp className="w-3 h-3" />{tool.seoBadge}
                      </span>
                      <span className="text-sm text-green-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        {t("tools_try")} <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
