import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SentimentAnalyzer from "../components/analyze/SentimentAnalyzer";
import "./Analyze.css";  // <-- Add this

const Analyze = () => {
  return (
    <div className="analyze-page">
      <Header />

      <main className="analyze-container">
        <div className="analyze-box">
          
          {/* Page Tag */}
          <div className="analyze-badge">Sentiment Analysis</div>

          {/* Title & Subtitle */}
          <h1 className="analyze-title">Analyze Your Mood</h1>
          <p className="analyze-subtitle">
            Share your thoughts and feelings below. Our AI will analyze your text
            and give insights into your emotional state.
          </p>

          {/* Trust Badges */}
          <div className="trust-badges">
            <div className="trust-item">🔐 Private & Secure</div>
            <div className="trust-item">⚡ Instant Results</div>
            <div className="trust-item">🤖 AI-Powered</div>
          </div>

          {/* Sentiment Input Component */}
          <SentimentAnalyzer />
        </div>
      </main>

    </div>
  );
};

export default Analyze;
