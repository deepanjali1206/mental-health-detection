import { useState } from "react";
import SentimentResults from "./SentimentResults";

// Dummy sentiment analysis function
const analyzeSentiment = async (text) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      // Dummy result
      resolve({
        sentiment: text.includes("happy") ? "positive" : "negative",
        confidence: 0.85,
        indicators: [
          { type: "stress", label: "Stress detected", score: 60 },
          { type: "anxiety", label: "Anxiety detected", score: 40 },
        ],
        emotions: [
          { emotion: "Happy", score: 0.6 },
          { emotion: "Sad", score: 0.3 },
          { emotion: "Angry", score: 0.1 },
        ],
      });
    }, 1000);
  });
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
      setError("Something went wrong.");
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
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h2>Share Your Thoughts</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="How are you feeling today?"
        style={{ width: "100%", minHeight: "100px", padding: "8px", marginBottom: "10px" }}
        disabled={loading}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={handleAnalyze} disabled={loading || !text.trim()} style={{ marginRight: "10px" }}>
          {loading ? "Analyzing..." : "Analyze Mood"}
        </button>
        {result && <button onClick={handleReset}>Reset</button>}
      </div>

      {result && <SentimentResults result={result} />}
    </div>
  );
};

export default SentimentAnalyzer;
