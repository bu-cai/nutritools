"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const TESTIMONIALS_EN = [
  {
    avatar: "👩‍🍳",
    name: "Sarah M.",
    role: "Home Cook",
    text: "I paste my meal prep ingredients every Sunday. It breaks down every macro instantly — way faster than any app I've tried.",
  },
  {
    avatar: "🏋️",
    name: "James K.",
    role: "Fitness Enthusiast",
    text: "Finally a nutrition calculator that handles custom recipes, not just packaged food barcodes. The AI understands ingredient amounts perfectly.",
  },
  {
    avatar: "👩‍💼",
    name: "Emily R.",
    role: "Working Mom",
    text: "The meal plan generator gave me a real, practical week of meals — not just salads. Actual food my whole family enjoys.",
  },
];

const TESTIMONIALS_ZH = [
  {
    avatar: "👩‍🍳",
    name: "小美",
    role: "家庭主妇",
    text: "每周备菜前把食材清单粘贴进去，营养数据一目了然，比任何 App 都快，再也不用一条一条查了。",
  },
  {
    avatar: "🏋️",
    name: "小杰",
    role: "健身达人",
    text: "终于有能分析自制食谱的工具了，不只是扫条形码。连食材用量它也能精准理解，宏量素一分不差。",
  },
  {
    avatar: "👩‍💼",
    name: "晓雯",
    role: "上班族妈妈",
    text: "饮食计划生成器给了我一份真实可行的一周食谱，不是千篇一律的沙拉，是全家都爱吃的菜，而且有购物清单！",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function SocialProof() {
  const { lang, t } = useLanguage();
  const testimonials = lang === "zh" ? TESTIMONIALS_ZH : TESTIMONIALS_EN;

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50/60">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          {/* Star rating */}
          <div className="inline-flex items-center gap-1.5 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-2 text-sm font-medium text-gray-600">{t("sp_badge")}</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{t("sp_title")}</h2>
          <p className="text-gray-500 text-sm">{t("sp_sub")}</p>
        </div>

        {/* Testimonial cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid md:grid-cols-3 gap-5"
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.name}
              variants={cardVariant}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{item.avatar}</span>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{item.name}</div>
                  <div className="text-xs text-gray-400">{item.role}</div>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">"{item.text}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
