import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./HowItWorks.css";

const steps = [
  {
    icon: "💬",
    number: "01",
    title: "Enter Your Text",
    description: "Share your thoughts or feelings you'd like AI to analyze."
  },
  {
    icon: "🧠",
    number: "02",
    title: "NLP Processing",
    description: "Our AI uses NLP to analyze patterns and emotional signals."
  },
  {
    icon: "🔍",
    number: "03",
    title: "Sentiment Detection",
    description: "AI identifies the emotional sentiment and confidence score."
  },
  {
    icon: "📊",
    number: "04",
    title: "View Results",
    description: "Get insights like sentiment label and overall mood."
  }
];

const HowItWorks = () => {
  return (
    <div className="page">
      <Header />

      {/* HERO */}
<section className="hero">
  <div className="hero-content">
    
    {/* Badge */}
    <div className="hero-badge">💡 How It Works</div>

    {/* Main Title */}
    <h1 className="hero-title">
      How <span>Sentiment Analysis</span> Works
    </h1>

    {/* Description */}
    <p className="hero-text">
      Our AI decodes emotions using advanced Natural Language Processing (NLP)
      to give clear, meaningful, and accurate emotional insights instantly.
    </p>

    {/* Info Strip */}
    <div className="info-strip">
      <div className="info-chip">
        <span className="chip-icon">⚡</span>Fast Results
      </div>

      <div className="info-chip">
        <span className="chip-icon">🔒</span>Private & Secure
      </div>

      <div className="info-chip">
        <span className="chip-icon">🤖</span>AI Powered
      </div>
    </div>

  </div>
</section>



      {/* STEPS WRAPPER */}
      <div className="steps-wrapper">
        <h2 className="section-title">4 Simple Steps</h2>

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
          <h2>Ready to Try It?</h2>
          <p>Experience emotion detection instantly. Fast, free & private.</p>
          <Link to="/analyze">
            <button className="btn-primary">Analyze Your Mood ➜</button>
          </Link>
        </section>
      </div>

    
    </div>
  );
};

export default HowItWorks;
