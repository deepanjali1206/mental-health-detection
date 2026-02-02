import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SentimentAnalyzer from "../components/analyze/SentimentAnalyzer";

const Analyze = () => {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f0f0f0" }}>
      <Header />

      <main style={{ padding: "50px 20px" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          {/* Page Header */}
          <div style={{ marginBottom: "30px" }}>
            <div 
              style={{ display: "inline-block", padding: "5px 10px", marginBottom: "10px", borderRadius: "20px", border: "1px solid #ccc", backgroundColor: "#e0f7fa" }}
            >
              Sentiment Analysis
            </div>
            <h1 style={{ fontSize: "28px", marginBottom: "10px" }}>Analyze Your Mood</h1>
            <p style={{ color: "#555" }}>
              Share your thoughts and feelings below. Our AI will analyze your text 
              to provide insights into your emotional state.
            </p>
          </div>

          {/* Trust Badges */}
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginBottom: "30px" }}>
            <div style={{ padding: "5px 10px", border: "1px solid #ccc", borderRadius: "10px", backgroundColor: "#fff" }}>
              Private & Secure
            </div>
            <div style={{ padding: "5px 10px", border: "1px solid #ccc", borderRadius: "10px", backgroundColor: "#fff" }}>
              Instant Results
            </div>
            <div style={{ padding: "5px 10px", border: "1px solid #ccc", borderRadius: "10px", backgroundColor: "#fff" }}>
              AI-Powered
            </div>
          </div>

          {/* Sentiment Analyzer */}
          <SentimentAnalyzer />
        </div>
      </main>

    </div>
  );
};

export default Analyze;
