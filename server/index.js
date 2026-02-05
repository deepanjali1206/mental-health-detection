import cors from "cors";
import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "1mb" }));

const WORD_SETS = {
  positive: [
    "happy",
    "joy",
    "good",
    "great",
    "relieved",
    "hopeful",
    "calm",
    "confident",
    "excited",
    "grateful",
    "peaceful",
  ],
  negative: [
    "sad",
    "depressed",
    "angry",
    "tired",
    "overwhelmed",
    "hopeless",
    "down",
    "lonely",
    "stressed",
    "anxious",
    "panic",
    "worried",
  ],
  stress: ["stressed", "overwhelmed", "pressure", "burned", "exhausted"],
  anxiety: ["anxious", "panic", "worried", "nervous", "uneasy", "fear"],
  sadness: ["sad", "depressed", "down", "hopeless", "lonely"],
  anger: ["angry", "furious", "irritated", "mad"],
};

const tokenize = (text) => text.toLowerCase().match(/[a-z']+/g) ?? [];

const countMatches = (tokens, words) => {
  const wordSet = new Set(words);
  return tokens.reduce((count, token) => count + (wordSet.has(token) ? 1 : 0), 0);
};

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

const analyzeText = (text) => {
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
      score: clamp((stressCount / totalTokens) * 100, 0, 100),
    },
    {
      type: "anxiety",
      label: "Anxiety detected",
      score: clamp((anxietyCount / totalTokens) * 100, 0, 100),
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
  };
};

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/analyze", (req, res) => {
  const { text } = req.body ?? {};

  if (!text || typeof text !== "string" || !text.trim()) {
    return res.status(400).json({ message: "Text is required for analysis." });
  }

  const analysis = analyzeText(text);
  return res.json(analysis);
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
