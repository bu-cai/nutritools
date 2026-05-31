type Lang = "en" | "zh";

export const NUTRITION_ANALYZER_PROMPT = (ingredients: string, lang: Lang = "en") => {
  const isZh = lang === "zh";
  return `
You are a professional nutritionist. Analyze these recipe ingredients and provide accurate nutritional information.
${isZh ? "Please write healthInsights and warnings in Chinese (Simplified)." : ""}

Ingredients:
${ingredients}

Return a JSON object with this exact structure:
{
  "totalCalories": number,
  "servings": number,
  "perServing": {
    "calories": number,
    "protein": number,
    "carbohydrates": number,
    "fat": number,
    "fiber": number,
    "sugar": number
  },
  "macroPercentages": {
    "protein": number,
    "carbs": number,
    "fat": number
  },
  "healthInsights": "string (2-3 sentences about the nutritional profile${isZh ? ", in Chinese" : ""})",
  "warnings": ["string array, any concerning nutritional aspects, can be empty${isZh ? ", in Chinese" : ""}"]
}

Be accurate and realistic. Return only valid JSON, no markdown.
`;
};

export const MEAL_PLAN_GENERATOR_PROMPT = (
  goal: string,
  calories: number,
  mealsPerDay: number,
  restrictions: string[],
  lang: Lang = "en"
) => {
  const isZh = lang === "zh";
  const days = isZh
    ? ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
    : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const mealTypes = isZh
    ? ["早餐", "午餐", "晚餐", "加餐"]
    : ["Breakfast", "Lunch", "Dinner", "Snack"];

  return `
You are a certified nutritionist and meal planning expert. Create a detailed 7-day meal plan.
${isZh ? "Respond with meal names, ingredients and shopping list items in Chinese (Simplified). Day names must be exactly: " + days.join(", ") : ""}

Parameters:
- Goal: ${goal}
- Daily Calories Target: ${calories} kcal
- Meals per day: ${mealsPerDay}
- Dietary restrictions: ${restrictions.length > 0 ? restrictions.join(", ") : "None"}

Return a JSON object with this exact structure:
{
  "weekSummary": {
    "avgDailyCalories": number,
    "avgProtein": number,
    "avgCarbs": number,
    "avgFat": number
  },
  "days": [
    {
      "day": "${days[0]}",
      "totalCalories": number,
      "meals": [
        {
          "type": "${mealTypes[0]}",
          "name": "string",
          "calories": number,
          "protein": number,
          "carbs": number,
          "fat": number,
          "ingredients": ["string array"]
        }
      ]
    }
  ],
  "shoppingList": {
    "produce": ["string array"],
    "proteins": ["string array"],
    "grains": ["string array"],
    "dairy": ["string array"],
    "pantry": ["string array"]
  }
}

Include all 7 days (${days.join(", ")}). Each day must have exactly ${mealsPerDay} meals.
Meal types to use: ${mealTypes.slice(0, mealsPerDay).join(", ")}.
Be realistic and varied. Return only valid JSON, no markdown.
`;
};

export const FOOD_SUBSTITUTION_PROMPT = (
  ingredient: string,
  context: string,
  reason: string,
  lang: Lang = "en"
) => {
  const isZh = lang === "zh";
  return `
You are a culinary expert and nutritionist specializing in ingredient substitutions.
${isZh ? "Please write substitute names, pros, cons, notes, and tips in Chinese (Simplified). Ratios can use Chinese units." : ""}

Find substitutes for: ${ingredient}
Used in: ${context}
Reason for substitution: ${reason}

Return a JSON object with this exact structure:
{
  "original": "${ingredient}",
  "substitutes": [
    {
      "name": "string",
      "ratio": "string (e.g., '1:1' or 'use 3/4 cup for every 1 cup'${isZh ? ", 可用中文说明" : ""})",
      "matchScore": number (0-100),
      "isBestMatch": boolean (true for first/best only),
      "pros": ["string array, 2-3 benefits"],
      "cons": ["string array, 1-2 drawbacks"],
      "notes": "string (brief usage tip)"
    }
  ],
  "tips": "string (general advice for this substitution)"
}

Provide 3-5 substitutes ordered by matchScore descending. The first should have isBestMatch: true.
Return only valid JSON, no markdown.
`;
};
