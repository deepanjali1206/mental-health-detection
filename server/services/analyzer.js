import { WORD_SETS } from "../data/lexicon.js";

const tokenize = (text) => text.toLowerCase().match(/[a-z']+/g) ?? [];

const countMatches = (tokens, words) => {
  const wordSet = new Set(words);
  return tokens.reduce((count, token) => count + (wordSet.has(token) ? 1 : 0), 0);
};

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

const scorePercentage = (count, totalTokens) => clamp((count / totalTokens) * 100, 0, 100);

export const analyzeText = (text) => {
  const tokens = tokenize(text);
  const totalTokens = Math.max(tokens.length, 1);

  const positiveCount = countMatches(tokens, WORD_SETS.positive);
  const negativeCount = countMatches(tokens, WORD_SETS.negative);
  const stressCount = countMatches(tokens, WORD_SETS.stress);
  const anxietyCount = countMatches(tokens, WORD_SETS.anxiety);
  const sadnessCount = countMatches(tokens, WORD_SETS.sadness);
  const angerCount = countMatches(tokens, WORD_SETS.anger);

  const sentimentScore = positiveCount - negativeCount;
  const normalizedScore = sentimentScore / totalTokens;
  const sentiment =
    normalizedScore > 0.05 ? "positive" : normalizedScore < -0.05 ? "negative" : "neutral";
  const confidence = clamp(0.55 + Math.abs(normalizedScore) * 0.9, 0.55, 0.95);

  const indicators = [
    {
      type: "stress",
      label: "Stress detected",
      score: scorePercentage(stressCount, totalTokens),
    },
    {
      type: "anxiety",
      label: "Anxiety detected",
      score: scorePercentage(anxietyCount, totalTokens),
    },
  ];

  const emotions = [
    {
      emotion: "Happy",
      score: clamp(positiveCount / totalTokens),
    },
    {
      emotion: "Sad",
      score: clamp(sadnessCount / totalTokens),
    },
    {
      emotion: "Angry",
      score: clamp(angerCount / totalTokens),
    },
  ];

  return {
    sentiment,
    confidence: Number(confidence.toFixed(2)),
    indicators,
    emotions,
    summary: {
      totalTokens,
      positiveCount,
      negativeCount,
    },
  };
};
