import React from "react";

const SentimentResults = ({ result }) => {
  const getSentimentLabel = () => {
    switch (result.sentiment) {
      case "positive":
        return "Positive";
      case "negative":
        return "Negative";
      default:
        return "Neutral";
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px" }}>
      <h3>Sentiment: {getSentimentLabel()}</h3>
      <p>Confidence: {(result.confidence * 100).toFixed(1)}%</p>

      {result.indicators.length > 0 && (
        <div>
          <h4>Detected Indicators:</h4>
          <ul>
            {result.indicators.map((ind, i) => (
              <li key={i}>
                {ind.label} - {ind.score}%
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <h4>Emotion Breakdown:</h4>
        <ul>
          {result.emotions.map((emo, i) => (
            <li key={i}>
              {emo.emotion}: {(emo.score * 100).toFixed(0)}%
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: "10px", fontSize: "12px", color: "#555" }}>
        <strong>Disclaimer:</strong> This is for informational purposes only.
      </div>
    </div>
  );
};

export default SentimentResults;
