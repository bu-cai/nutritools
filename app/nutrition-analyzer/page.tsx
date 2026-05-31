"use client";

import { useState, useRef } from "react";
import { Flame, Beef, Wheat, Droplets, Loader2, RotateCcw, Copy, Check } from "lucide-react";
import ToolLayout from "@/components/shared/ToolLayout";
import AdSlot from "@/components/shared/AdSlot";
import StreamingText from "@/components/shared/StreamingText";
import { useLanguage } from "@/lib/LanguageContext";

interface NutritionData {
  totalCalories: number;
  servings: number;
  perServing: {
    calories: number;
    protein: number;
    carbohydrates: number;
    fat: number;
    fiber: number;
    sugar: number;
  };
  macroPercentages: { protein: number; carbs: number; fat: number };
  healthInsights: string;
  warnings: string[];
}

const PLACEHOLDER_EN = `2 cups all-purpose flour
3 large eggs
1 cup whole milk
2 tbsp butter
1 tsp vanilla extract
2 tbsp sugar
pinch of salt`;

const PLACEHOLDER_ZH = `2杯中筋面粉
3个大鸡蛋
1杯全脂牛奶
2汤匙黄油
1茶匙香草精
2汤匙白砂糖
少许盐`;

const MACRO_BARS: { macroKey: "protein" | "carbs" | "fat"; labelKey: string; color: string }[] = [
  { macroKey: "protein", labelKey: "na_prot", color: "bg-green-500" },
  { macroKey: "carbs",   labelKey: "na_carb", color: "bg-amber-500" },
  { macroKey: "fat",     labelKey: "na_fat",  color: "bg-orange-500" },
];

const FAQ_EN = [
  { q: "How accurate is the recipe nutrition calculator?", a: "Our AI provides estimates based on standard nutritional databases. Results are close to professional nutrition labels but may vary slightly depending on ingredient brands and preparation methods." },
  { q: "Can I calculate nutrition for homemade recipes?", a: "Yes! This tool is ideal for homemade recipes. Just list each ingredient with its quantity and our AI will calculate the full nutritional profile." },
  { q: "Does it work without an account?", a: "Completely free and no account required. Just enter your ingredients and get instant results." },
  { q: "What macros does it track?", a: "It tracks calories, protein, carbohydrates, fat, fiber, and sugar — plus gives a macro percentage breakdown and personalized health insights." },
  { q: "How is per-serving calculated?", a: "The AI estimates a reasonable serving count based on recipe size, similar to how commercial nutrition labels work." },
];

const FAQ_ZH = [
  { q: "营养计算器的精准度如何？", a: "我们的 AI 基于标准营养数据库提供估算结果，与专业营养标签非常接近，但可能因食材品牌和烹饪方式略有差异。" },
  { q: "可以计算自制食谱的营养吗？", a: "当然可以！此工具非常适合自制食谱。只需列出每种食材及用量，AI 即可计算完整营养成分。" },
  { q: "需要注册账号吗？", a: "完全免费，无需注册。直接输入食材即可获得即时结果。" },
  { q: "追踪哪些宏量素？", a: "追踪卡路里、蛋白质、碳水化合物、脂肪、膳食纤维和糖分，并提供宏量素比例分析和个性化健康建议。" },
  { q: "每份用量是如何计算的？", a: "AI 根据食谱规模估算合理的份数，类似商业营养标签的标注方式。" },
];

export default function NutritionAnalyzerPage() {
  const { lang, t } = useLanguage();
  const [ingredients, setIngredients] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "streaming" | "done" | "error">("idle");
  const [rawText, setRawText] = useState("");
  const [data, setData] = useState<NutritionData | null>(null);
  const [perServing, setPerServing] = useState(false);
  const [copiedResult, setCopiedResult] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  const analyze = async () => {
    if (!ingredients.trim()) return;
    abortRef.current?.abort();
    const ctrl = new AbortController();
    abortRef.current = ctrl;

    setStatus("loading");
    setData(null);
    setRawText("");

    try {
      const res = await fetch("/api/analyze-nutrition", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ingredients, lang }),
        signal: ctrl.signal,
      });

      if (!res.ok) throw new Error("API error");
      setStatus("streaming");

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";
        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const payload = line.slice(6).trim();
            if (payload === "[DONE]") { setStatus("done"); break; }
            try {
              const { text } = JSON.parse(payload);
              setRawText((prev) => {
                const next = prev + text;
                try { setData(JSON.parse(next)); } catch {}
                return next;
              });
            } catch {}
          }
        }
      }
      setStatus("done");
    } catch (err) {
      if ((err as Error).name !== "AbortError") setStatus("error");
    }
  };

  const reset = () => { abortRef.current?.abort(); setStatus("idle"); setData(null); setRawText(""); setIngredients(""); };

  const tryExample = () => setIngredients(lang === "zh" ? PLACEHOLDER_ZH : PLACEHOLDER_EN);

  const copyResult = async () => {
    if (!data) return;
    const total = {
      calories: data.totalCalories,
      protein: +(data.perServing.protein * data.servings).toFixed(1),
      carbs: +(data.perServing.carbohydrates * data.servings).toFixed(1),
      fat: +(data.perServing.fat * data.servings).toFixed(1),
      fiber: +(data.perServing.fiber * data.servings).toFixed(1),
    };
    const lines = [
      lang === "zh" ? "🥗 营养分析结果" : "🥗 Nutrition Analysis Results",
      "",
      `• ${t("na_cal")}: ${total.calories.toFixed(0)} kcal`,
      `• ${t("na_prot")}: ${total.protein}g`,
      `• ${t("na_carb")}: ${total.carbs}g`,
      `• ${t("na_fat")}: ${total.fat}g`,
      `• ${lang === "zh" ? "膳食纤维" : "Fiber"}: ${total.fiber}g`,
      "",
      `${t("na_ratio")}: ${t("na_prot")} ${data.macroPercentages.protein}% | ${t("na_carb")} ${data.macroPercentages.carbs}% | ${t("na_fat")} ${data.macroPercentages.fat}%`,
      "",
      `💡 ${data.healthInsights}`,
      "",
      lang === "zh" ? "— NutriTools.com 生成" : "— Generated by NutriTools.com",
    ];
    await navigator.clipboard.writeText(lines.join("\n"));
    setCopiedResult(true);
    setTimeout(() => setCopiedResult(false), 2000);
  };

  const macros = perServing ? data?.perServing : data
    ? { calories: data.totalCalories, protein: data.perServing.protein * data.servings, carbohydrates: data.perServing.carbohydrates * data.servings, fat: data.perServing.fat * data.servings, fiber: data.perServing.fiber * data.servings, sugar: data.perServing.sugar * data.servings }
    : null;

  const faq = lang === "zh" ? FAQ_ZH : FAQ_EN;

  return (
    <ToolLayout title={t("na_title")} description={t("na_desc")} badge={t("na_badge")}>
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left: Input */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-gray-700">{t("na_label")}</label>
            <button
              onClick={tryExample}
              className="text-xs text-green-600 hover:text-green-700 font-medium transition-colors"
            >
              {t("try_example")} →
            </button>
          </div>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder={lang === "zh" ? PLACEHOLDER_ZH : PLACEHOLDER_EN}
            rows={9}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 text-sm text-gray-800 placeholder-gray-300 resize-none font-mono bg-white transition"
          />
          <p className="text-xs text-gray-400">{t("na_tip")}</p>
          {/* sticky on mobile so keyboard never covers the button */}
          <div className="sticky bottom-0 sm:static bg-white/95 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none -mx-1 px-1 pb-3 sm:pb-0 pt-1 sm:pt-0">
            <div className="flex gap-3">
              <button
                onClick={analyze}
                disabled={status === "loading" || status === "streaming" || !ingredients.trim()}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-green-600 hover:bg-green-700 disabled:bg-green-300 text-white font-medium rounded-lg transition-colors"
              >
                {(status === "loading" || status === "streaming") ? (
                  <><Loader2 className="w-4 h-4 animate-spin" />{t("na_btn_loading")}</>
                ) : t("na_btn")}
              </button>
              {status !== "idle" && (
                <button onClick={reset} className="px-4 py-3 border border-gray-200 hover:border-gray-300 text-gray-500 rounded-lg transition-colors" title="Reset">
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>
            <p className="mt-2 text-xs text-gray-400 flex items-center gap-1">
              <span className="text-green-500">✓</span> {t("no_signup_hint")}
            </p>
          </div>
        </div>

        {/* Right: Results */}
        <div>
          {status === "idle" && (
            <div className="h-full min-h-[320px] flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-2xl text-center p-8">
              <Flame className="w-10 h-10 text-gray-200 mb-3" />
              <p className="text-gray-400 text-sm">{t("na_empty")}</p>
              <p className="text-xs text-gray-300 mt-1">{t("na_empty_sub")}</p>
            </div>
          )}
          {status === "loading" && (
            <div className="space-y-3 animate-pulse">
              {[...Array(4)].map((_, i) => <div key={i} className="h-16 bg-gray-100 rounded-xl" />)}
            </div>
          )}
          {status === "error" && (
            <div className="flex flex-col items-center justify-center min-h-[200px] border border-red-100 rounded-2xl p-8 bg-red-50">
              <p className="text-red-600 font-medium mb-1">{t("na_error")}</p>
              <p className="text-sm text-red-400">{t("na_error_sub")}</p>
            </div>
          )}

          {(status === "streaming" || status === "done") && data && (
            <div className="space-y-4">
              {/* Per Serving toggle + Copy */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="text-sm font-medium text-gray-700">{t("na_facts")}</span>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1 bg-gray-100 rounded-lg p-1 text-xs font-medium">
                    <button onClick={() => setPerServing(false)} className={`px-3 py-1 rounded-md transition-colors ${!perServing ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"}`}>{t("na_toggle_total")}</button>
                    <button onClick={() => setPerServing(true)}  className={`px-3 py-1 rounded-md transition-colors ${perServing ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"}`}>{t("na_toggle_serving")}</button>
                  </div>
                  {status === "done" && (
                    <button
                      onClick={copyResult}
                      className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-700 transition-colors px-2 py-1.5 border border-gray-200 hover:border-gray-300 rounded-lg"
                    >
                      {copiedResult
                        ? <><Check className="w-3 h-3 text-green-500" />{t("copy_result_done")}</>
                        : <><Copy className="w-3 h-3" />{t("copy_result")}</>}
                    </button>
                  )}
                </div>
              </div>

              {/* Metric cards */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Flame,    labelKey: "na_cal",  value: macros?.calories?.toFixed(0),      unit: "kcal", color: "text-orange-500", bg: "bg-orange-50" },
                  { icon: Beef,     labelKey: "na_prot", value: macros?.protein?.toFixed(1),        unit: "g",    color: "text-green-600",  bg: "bg-green-50" },
                  { icon: Wheat,    labelKey: "na_carb", value: macros?.carbohydrates?.toFixed(1),  unit: "g",    color: "text-amber-600",  bg: "bg-amber-50" },
                  { icon: Droplets, labelKey: "na_fat",  value: macros?.fat?.toFixed(1),            unit: "g",    color: "text-blue-600",   bg: "bg-blue-50" },
                ].map(({ icon: Icon, labelKey, value, unit, color, bg }) => (
                  <div key={labelKey} className={`${bg} rounded-xl p-4`}>
                    <div className={`flex items-center gap-1.5 mb-1 ${color}`}>
                      <Icon className="w-4 h-4" />
                      <span className="text-xs font-medium">{t(labelKey)}</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {value ?? "—"}<span className="text-sm font-normal text-gray-500 ml-1">{unit}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Macro bars */}
              <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-3">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{t("na_ratio")}</p>
                {MACRO_BARS.map(({ macroKey, labelKey, color }) => (
                  <div key={macroKey} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">{t(labelKey)}</span>
                      <span className="text-gray-400">{data.macroPercentages[macroKey]}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full ${color} rounded-full transition-all duration-700`} style={{ width: `${data.macroPercentages[macroKey]}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-400">{t("na_servings").replace("{n}", String(data.servings))} {perServing ? `· ${t("na_toggle_serving")}` : `· ${t("na_toggle_total")}`}</p>

              {/* Health insights */}
              <div className="bg-green-50 border border-green-100 rounded-xl p-4">
                <p className="text-xs font-semibold text-green-700 mb-2">{t("na_insights_title")}</p>
                <p className="text-sm text-green-800 leading-relaxed">
                  <StreamingText text={data.healthInsights} isStreaming={status === "streaming"} />
                </p>
              </div>

              {/* Warnings */}
              {data.warnings.length > 0 && (
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                  <p className="text-xs font-semibold text-amber-700 mb-2">{t("na_warnings_title")}</p>
                  <ul className="space-y-1">
                    {data.warnings.map((w, i) => <li key={i} className="text-xs text-amber-700">• {w}</li>)}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {status === "done" && <AdSlot position="below-results" size="728x90" />}

      {/* SEO content */}
      <div className="mt-16 max-w-3xl mx-auto prose prose-sm text-gray-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("na_seo_h2")}</h2>
        <p>{t("na_seo_p1")}</p>
        <p className="mt-3">{t("na_seo_p2")}</p>
        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">{t("na_faq_title")}</h3>
        <div className="space-y-4">
          {faq.map(({ q, a }, i) => (
            <details key={i} className="border border-gray-100 rounded-xl overflow-hidden">
              <summary className="px-4 py-3 cursor-pointer font-medium text-gray-800 hover:bg-gray-50 text-sm">{q}</summary>
              <p className="px-4 py-3 text-sm text-gray-500 border-t border-gray-100">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </ToolLayout>
  );
}
