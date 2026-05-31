"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "zh";

interface LanguageContextValue {
  lang: Language;
  toggle: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  toggle: () => {},
  t: (k) => k,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("nutri-lang") as Language | null;
    if (saved === "en" || saved === "zh") setLang(saved);
  }, []);

  const toggle = () => {
    setLang((prev) => {
      const next = prev === "en" ? "zh" : "en";
      localStorage.setItem("nutri-lang", next);
      return next;
    });
  };

  const t = (key: string): string => {
    const map = lang === "zh" ? ZH : EN;
    return (map as Record<string, string>)[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

// ─── English ────────────────────────────────────────────────────────────────
const EN: Record<string, string> = {
  // Navbar
  nav_analyzer: "Nutrition Analyzer",
  nav_planner: "Meal Planner",
  nav_swaps: "Food Swaps",
  nav_try: "Try Free",

  // Hero
  hero_badge: "Free AI Tools · No Account Needed",
  hero_h1_1: "Paste Ingredients,",
  hero_h1_2: "Get Nutrition Facts",
  hero_h1_3: "In 10 Seconds",
  hero_sub: "Analyze calories & macros from any ingredient list, generate a personalized 7-day meal plan, or find the perfect ingredient swap — all free, no signup required.",
  hero_cta1: "Analyze a Recipe — Free",
  hero_cta2: "See all tools",
  hero_trust: "✓ No account needed  ·  ✓ Any recipe or ingredient  ·  ✓ Results in seconds",
  hero_stat1_v: "130K+",
  hero_stat1_l: "Monthly Searches",
  hero_stat2_v: "$0",
  hero_stat2_l: "Cost Forever",
  hero_stat3_v: "3",
  hero_stat3_l: "Powerful Tools",

  // Social Proof
  sp_title: "Loved by home cooks & fitness fans",
  sp_sub: "No account. No credit card. Just instant nutrition insights.",
  sp_badge: "4.9 / 5 · 200+ early users",

  // SeoStats
  stats_s1_v: "130K+", stats_s1_l: "Monthly searches for our tools",
  stats_s2_v: "< 5s",  stats_s2_l: "Average AI response time",
  stats_s3_v: "3",     stats_s3_l: "Specialized nutrition tools",
  stats_s4_v: "100%",  stats_s4_l: "Free, no account needed",

  // ToolsGrid
  tools_title: "Three tools, one toolkit",
  tools_sub: "Everything you need to make smarter food decisions.",
  tool1_title: "Nutrition Analyzer",
  tool1_desc: "Calculate calories, protein, carbs & fat from any recipe ingredients instantly.",
  tool1_seo: "40K+ searches/mo",
  tool1_preview_in: "2 cups flour, 3 eggs, 1 cup milk...",
  tool1_preview_out: "485 kcal · 18g protein · 62g carbs",
  tool2_title: "Meal Plan Generator",
  tool2_desc: "Get a personalized 7-day meal plan tailored to your goals and dietary needs.",
  tool2_seo: "55K+ searches/mo",
  tool2_preview_in: "Fat Loss · 1,800 cal · 3 meals",
  tool2_preview_out: "Full week plan + shopping list",
  tool3_title: "Food Substitutions",
  tool3_desc: "Find the perfect ingredient swap for allergies, diet, or when you're out of stock.",
  tool3_seo: "35K+ searches/mo",
  tool3_preview_in: "butter in baking · healthier",
  tool3_preview_out: "Applesauce, Greek yogurt, avocado...",
  tools_try: "Try it",

  // HowItWorks
  how_title: "How it works",
  how_sub: "Three steps from question to answer.",
  how1_title: "Input",
  how1_desc: "Enter your recipe ingredients, dietary goals, or the ingredient you need to swap.",
  how2_title: "AI Processing",
  how2_desc: "Claude AI analyzes your input using nutritional databases and culinary knowledge.",
  how3_title: "Get Results",
  how3_desc: "Receive accurate nutritional data, personalized meal plans, or smart substitutions instantly.",

  // CTA
  cta_title: "Start eating smarter today",
  cta_sub: "No signup, no credit card, no limits. Just AI-powered nutrition insights at your fingertips.",
  cta_btn1: "Analyze a Recipe",
  cta_btn2: "Generate Meal Plan",

  // Footer
  footer_tagline: "Free AI-powered food and nutrition tools for everyone.",
  footer_tools: "Tools",
  footer_subs: "Substitutes",
  footer_company: "Company",
  footer_copyright: "All rights reserved.",
  footer_powered: "Powered by Claude AI",
  footer_about: "About",
  footer_privacy: "Privacy Policy",
  footer_terms: "Terms of Service",
  footer_res1: "Butter Substitutes",
  footer_res2: "Egg Substitutes",
  footer_res3: "Milk Substitutes",
  footer_res4: "Sugar Substitutes",
  footer_res5: "Baking Powder Substitutes",
  footer_res6: "Heavy Cream Substitutes",
  footer_res7: "Vanilla Extract Substitutes",

  // Nutrition Analyzer page
  na_title: "Recipe Nutrition Analyzer",
  na_desc: "Calculate calories, protein, carbs & fat from any recipe ingredients.",
  na_badge: "40,000+ monthly searches",
  na_label: "Paste your ingredients",
  na_tip: 'Tip: Include quantities for more accurate results (e.g. "2 cups flour")',
  na_btn: "Analyze Recipe",
  na_btn_loading: "Analyzing...",
  na_empty: "Results will appear here",
  na_empty_sub: "Enter ingredients and click Analyze",
  na_error: "Analysis failed",
  na_error_sub: "Please check your API key and try again.",
  na_toggle_total: "Total",
  na_toggle_serving: "Per Serving",
  na_facts: "Nutrition Facts",
  na_cal: "Calories", na_prot: "Protein", na_carb: "Carbs", na_fat: "Fat",
  na_ratio: "Macro Ratio",
  na_servings: "Estimated {n} serving(s)",
  na_insights_title: "Health Insights",
  na_warnings_title: "Heads up",
  na_seo_h2: "How to use this nutrition calculator",
  na_seo_p1: "Our free recipe nutrition calculator uses Claude AI to analyze the caloric and macro content of any recipe ingredients. Simply enter your ingredients with quantities, click Analyze, and get instant results — no account or sign-up needed.",
  na_seo_p2: 'For best results with this calorie counter, include specific measurements such as "2 cups flour" or "200g chicken breast." The more precise your input, the more accurate your nutritional breakdown will be.',
  na_faq_title: "Frequently Asked Questions",

  // Meal Plan page
  mp_title: "7-Day Meal Plan Generator",
  mp_desc: "Get a personalized weekly meal plan tailored to your goals and dietary needs.",
  mp_badge: "55,000+ monthly searches",
  mp_goal: "Your Goal",
  mp_goal_fl: "Fat Loss", mp_goal_mg: "Muscle Gain", mp_goal_mt: "Maintenance", mp_goal_vg: "Vegetarian",
  mp_cal_label: "Daily Calories:",
  mp_meals_label: "Meals per day",
  mp_restrict_label: "Dietary restrictions (optional)",
  mp_btn: "✨ Generate My 7-Day Plan",
  mp_btn_loading: "Generating your plan...",
  mp_avg_cal: "Avg. Calories", mp_avg_prot: "Avg. Protein", mp_avg_carb: "Avg. Carbs", mp_avg_fat: "Avg. Fat",
  mp_shopping: "Shopping List",
  mp_export: "Export PDF — Coming Soon",
  mp_reset: "Start Over",
  mp_error: "Failed to generate plan",
  mp_retry: "Try again",
  mp_breakfast: "Breakfast", mp_lunch: "Lunch", mp_dinner: "Dinner", mp_snack: "Snack",

  // Food Substitution page
  fs_title: "Food Substitution Finder",
  fs_desc: "Find the perfect ingredient swap for allergies, dietary needs, or when you're out of stock.",
  fs_badge: "35,000+ monthly searches",
  fs_prompt: "What do you need to substitute?",
  fs_ing_placeholder: "butter",
  fs_ctx_placeholder: "baking (optional)",
  fs_in: "in",
  fs_reason: "Reason:",
  fs_reason_allergy: "Allergy",
  fs_reason_stock: "Out of stock",
  fs_reason_diet: "Dietary",
  fs_reason_health: "Healthier option",
  fs_btn: "Find Substitutes",
  fs_btn_loading: "Finding substitutes...",
  fs_popular: "Popular:",
  fs_found: "Found {n} substitutes for",
  fs_best: "Best Match",
  fs_copy: "Copy ratio",
  fs_copied: "Copied",
  fs_tip_title: "Pro tip",
  fs_error: "Failed to find substitutes. Please try again.",
  fs_seo_h2: "Common Food Substitutions",
  fs_seo_p: "Whether you have a food allergy, are following a special diet, or simply ran out of an ingredient, our AI-powered food substitution finder helps you discover the best alternatives. We cover butter substitutes, egg replacements, dairy-free swaps, gluten-free options, and much more.",

  // Shared UX
  try_example: "Try Example",
  no_signup_hint: "Free · No sign-up required",
  copy_result: "Copy Result",
  copy_result_done: "Copied!",
  mp_copy_plan: "Copy Plan",
  fs_copy_all: "Copy All",
};

// ─── Chinese ─────────────────────────────────────────────────────────────────
const ZH: Record<string, string> = {
  // Navbar
  nav_analyzer: "营养分析器",
  nav_planner: "饮食计划",
  nav_swaps: "食材替换",
  nav_try: "免费试用",

  // Hero
  hero_badge: "免费 AI 工具 · 无需账号",
  hero_h1_1: "粘贴食材清单，",
  hero_h1_2: "即刻营养分析",
  hero_h1_3: "10秒出结果",
  hero_sub: "AI 即时计算任意食材的卡路里、蛋白质、碳水和脂肪。还可生成个性化7天饮食计划，查找最佳食材替换方案——完全免费，无需注册。",
  hero_cta1: "免费分析我的食谱",
  hero_cta2: "查看所有工具",
  hero_trust: "✓ 无需账号  ·  ✓ 支持任意食谱  ·  ✓ 秒级出结果",
  hero_stat1_v: "13万+",
  hero_stat1_l: "月搜索量",
  hero_stat2_v: "¥0",
  hero_stat2_l: "永久免费",
  hero_stat3_v: "3",
  hero_stat3_l: "强力工具",

  // Social Proof
  sp_title: "深受厨师和健身爱好者喜爱",
  sp_sub: "无需注册，无需信用卡。即刻获得营养洞察。",
  sp_badge: "4.9 / 5 · 200+ 早期用户",

  // SeoStats
  stats_s1_v: "13万+", stats_s1_l: "工具月搜索量",
  stats_s2_v: "< 5秒",  stats_s2_l: "平均 AI 响应时间",
  stats_s3_v: "3",      stats_s3_l: "专业营养工具",
  stats_s4_v: "100%",   stats_s4_l: "免费，无需注册",

  // ToolsGrid
  tools_title: "三款工具，一站解决",
  tools_sub: "做出更明智饮食决策所需的一切。",
  tool1_title: "营养分析器",
  tool1_desc: "即时计算任何食谱的卡路里、蛋白质、碳水和脂肪。",
  tool1_seo: "月搜4万+",
  tool1_preview_in: "2杯面粉，3个鸡蛋，1杯牛奶...",
  tool1_preview_out: "485千卡 · 18克蛋白质 · 62克碳水",
  tool2_title: "饮食计划生成器",
  tool2_desc: "根据您的目标和饮食需求，生成个性化7天饮食计划。",
  tool2_seo: "月搜5.5万+",
  tool2_preview_in: "减脂 · 1800千卡 · 3餐",
  tool2_preview_out: "完整一周计划 + 购物清单",
  tool3_title: "食材替换建议",
  tool3_desc: "针对过敏、饮食限制或缺货情况，找到最佳食材替换方案。",
  tool3_seo: "月搜3.5万+",
  tool3_preview_in: "黄油 用于烘焙 · 更健康",
  tool3_preview_out: "苹果酱，希腊酸奶，牛油果...",
  tools_try: "立即试用",

  // HowItWorks
  how_title: "使用流程",
  how_sub: "三步从问题到答案。",
  how1_title: "输入",
  how1_desc: "输入食谱食材、饮食目标，或您需要替换的食材。",
  how2_title: "AI 处理",
  how2_desc: "Claude AI 利用营养数据库和烹饪知识分析您的输入。",
  how3_title: "获取结果",
  how3_desc: "即时获得精准的营养数据、个性化饮食计划或智能替换建议。",

  // CTA
  cta_title: "今天就开始吃得更聪明",
  cta_sub: "无需注册，无需信用卡，无任何限制。AI 营养洞察触手可及。",
  cta_btn1: "分析食谱",
  cta_btn2: "生成饮食计划",

  // Footer
  footer_tagline: "面向所有人的免费 AI 饮食营养工具。",
  footer_tools: "工具",
  footer_subs: "替换指南",
  footer_company: "关于",
  footer_copyright: "版权所有。",
  footer_powered: "由 Claude AI 驱动",
  footer_about: "关于我们",
  footer_privacy: "隐私政策",
  footer_terms: "服务条款",
  footer_res1: "黄油替换指南",
  footer_res2: "鸡蛋替换指南",
  footer_res3: "牛奶替换指南",
  footer_res4: "糖替换指南",
  footer_res5: "泡打粉替换指南",
  footer_res6: "淡奶油替换指南",
  footer_res7: "香草精替换指南",

  // Nutrition Analyzer page
  na_title: "食谱营养分析器",
  na_desc: "计算任何食谱食材的卡路里、蛋白质、碳水及脂肪含量。",
  na_badge: "月搜索量 4 万+",
  na_label: "粘贴您的食材清单",
  na_tip: "提示：包含用量可获得更精准的结果（如「2杯面粉」）",
  na_btn: "分析食谱",
  na_btn_loading: "分析中...",
  na_empty: "结果将在此处显示",
  na_empty_sub: "输入食材后点击分析",
  na_error: "分析失败",
  na_error_sub: "请检查 API 密钥后重试。",
  na_toggle_total: "总计",
  na_toggle_serving: "每份",
  na_facts: "营养成分",
  na_cal: "卡路里", na_prot: "蛋白质", na_carb: "碳水化合物", na_fat: "脂肪",
  na_ratio: "宏量素比例",
  na_servings: "预估 {n} 份",
  na_insights_title: "健康建议",
  na_warnings_title: "注意事项",
  na_seo_h2: "如何使用营养计算器",
  na_seo_p1: "我们的免费食谱营养计算器使用 Claude AI 分析任意食谱的卡路里和宏量素含量。只需输入带用量的食材，点击分析，即刻获得结果 —— 无需注册。",
  na_seo_p2: "为获得最佳效果，请包含具体用量，如「2杯面粉」或「200克鸡胸肉」。输入越精确，营养分析越准确。",
  na_faq_title: "常见问题",

  // Meal Plan page
  mp_title: "7天饮食计划生成器",
  mp_desc: "根据您的目标和饮食需求，获取个性化每周饮食计划。",
  mp_badge: "月搜索量 5.5 万+",
  mp_goal: "您的目标",
  mp_goal_fl: "减脂", mp_goal_mg: "增肌", mp_goal_mt: "维持体重", mp_goal_vg: "素食",
  mp_cal_label: "每日热量：",
  mp_meals_label: "每日餐数",
  mp_restrict_label: "饮食限制（可选）",
  mp_btn: "✨ 生成我的7天计划",
  mp_btn_loading: "生成中...",
  mp_avg_cal: "平均热量", mp_avg_prot: "平均蛋白质", mp_avg_carb: "平均碳水", mp_avg_fat: "平均脂肪",
  mp_shopping: "购物清单",
  mp_export: "导出 PDF —— 即将上线",
  mp_reset: "重新开始",
  mp_error: "生成计划失败",
  mp_retry: "重试",
  mp_breakfast: "早餐", mp_lunch: "午餐", mp_dinner: "晚餐", mp_snack: "加餐",

  // Food Substitution page
  fs_title: "食材替换建议器",
  fs_desc: "为过敏、饮食需求或缺货情况找到完美的食材替换方案。",
  fs_badge: "月搜索量 3.5 万+",
  fs_prompt: "您需要替换哪种食材？",
  fs_ing_placeholder: "黄油",
  fs_ctx_placeholder: "烘焙（可选）",
  fs_in: "用于",
  fs_reason: "原因：",
  fs_reason_allergy: "过敏",
  fs_reason_stock: "缺货",
  fs_reason_diet: "饮食限制",
  fs_reason_health: "更健康",
  fs_btn: "查找替换方案",
  fs_btn_loading: "查找中...",
  fs_popular: "热门：",
  fs_found: "找到 {n} 种替换方案，替换",
  fs_best: "最佳匹配",
  fs_copy: "复制比例",
  fs_copied: "已复制",
  fs_tip_title: "专家提示",
  fs_error: "查找失败，请重试。",
  fs_seo_h2: "常见食材替换指南",
  fs_seo_p: "无论您有食物过敏、遵循特殊饮食，还是只是某种食材用完了，我们的 AI 食材替换工具都能帮您找到最佳替代品。涵盖黄油、鸡蛋、乳制品、无麸质等各类替换方案。",

  // Shared UX
  try_example: "试用示例",
  no_signup_hint: "免费 · 无需注册",
  copy_result: "复制结果",
  copy_result_done: "已复制！",
  mp_copy_plan: "复制计划",
  fs_copy_all: "复制全部",
};
