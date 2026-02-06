import { useState } from "react";
import SentimentResults from "./SentimentResults";
import "./SentimentAnalyzer.css"; // <-- Import CSS

const analyzeSentiment = async (text) => {
  const response = await fetch("/api/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.message || "Something went wrong.");
  }

  return response.json();
};

const SentimentAnalyzer = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!text.trim()) {
      setError("Please enter some text.");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const analysisResult = await analyzeSentiment(text);
      setResult(analysisResult);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setText("");
    setResult(null);
    setError(null);
  };

  return (
    <div className="sentiment-box">
      <h2 className="sentiment-title">Share Your Thoughts</h2>

      <textarea
        className="sentiment-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="How are you feeling today?"
        disabled={loading}
      />

      {error && <p className="sentiment-error">{error}</p>}

      <div className="sentiment-buttons">
        <button
          className="sentiment-btn primary"
          onClick={handleAnalyze}
          disabled={loading || !text.trim()}
        >
          {loading ? "Analyzing..." : "Analyze Mood"}
        </button>

        {result && (
          <button className="sentiment-btn outline" onClick={handleReset}>
            Reset
          </button>
        )}
      </div>

      {result && <SentimentResults result={result} />}
    </div>
  );
};

export default SentimentAnalyzer;
