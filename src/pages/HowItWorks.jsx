import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./HowItWorks.css";

import Footer from "../components/Footer";

// Icons (we'll just use emojis for simplicity)
const steps = [
  {
    icon: "💬",
    number: "01",
    title: "Enter Your Text",
    description: "Share your thoughts, feelings, or any text you'd like to analyze.",
  },
  {
    icon: "🧠",
    number: "02",
    title: "NLP Processing",
    description: "AI analyzes your text for patterns and emotional indicators.",
  },
  {
    icon: "🔍",
    number: "03",
    title: "Sentiment Detection",
    description: "AI identifies sentiment (positive, negative, neutral) and confidence score.",
  },
  {
    icon: "📊",
    number: "04",
    title: "View Results",
    description: "See insights including sentiment label, confidence, and mood indicators.",
  },
];

const HowItWorks = () => {
  return (
    <div className="page">
      <Header />

      <main className="main">
        {/* Hero Section */}
        <section className="hero">
          <h1>How Sentiment Analysis Works</h1>
          <p>
            Our AI uses Natural Language Processing to understand and analyze the emotional content of your text.
          </p>
        </section>

        {/* Steps */}
        <section className="steps">
          {steps.map((step) => (
            <div key={step.number} className="step-card">
              <div className="step-icon">{step.icon}</div>
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="cta">
          <h2>Ready to Try It Yourself?</h2>
          <p>Experience AI-powered sentiment analysis. It's free and private.</p>
          <Link to="/analyze">
            <button className="btn-primary">Analyze Your Mood ➜</button>
          </Link>
        </section>
      </main>

   
    </div>
  );
};

export default HowItWorks;
