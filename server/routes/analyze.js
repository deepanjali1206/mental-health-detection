import { Router } from "express";
import { randomUUID } from "crypto";
import { analyzeText } from "../services/analyzer.js";
import { addAnalysis, getHistory } from "../storage/history.js";

const router = Router();

router.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

router.get("/analyses", (_req, res) => {
  res.json({ items: getHistory() });
});

router.post("/analyze", (req, res) => {
  const { text } = req.body ?? {};

  if (!text || typeof text !== "string" || !text.trim()) {
    return res.status(400).json({ message: "Text is required for analysis." });
  }

  if (text.length > 5000) {
    return res.status(400).json({ message: "Text must be 5000 characters or less." });
  }

  const analysis = analyzeText(text);
  const entry = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    input: text.slice(0, 300),
    ...analysis,
  };

  addAnalysis(entry);

  return res.json(analysis);
});

export default router;
