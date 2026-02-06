import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Resources.css";

const helplines = [
  {
    name: "988 Suicide & Crisis Lifeline",
    phone: "988",
    description: "24/7 free and confidential support for people in distress.",
    url: "https://988lifeline.org",
    icon: "📞",
  },
  {
    name: "SAMHSA National Helpline",
    phone: "1-800-662-4357",
    description: "Treatment referrals and mental health information.",
    url: "https://www.samhsa.gov/find-help/national-helpline",
    icon: "📞",
  },
  {
    name: "NAMI Helpline",
    phone: "1-800-950-6264",
    description: "National Alliance on Mental Illness information & support.",
    url: "https://www.nami.org/help",
    icon: "👥",
  },
];

const resources = [
  {
    name: "National Institute of Mental Health",
    description: "Trusted information on mental health conditions and treatments.",
    url: "https://www.nimh.nih.gov",
    icon: "🌐",
  },
  {
    name: "Mental Health America",
    description: "Screening tools, guides, and wellness community resources.",
    url: "https://www.mhanational.org",
    icon: "❤️",
  },
  {
    name: "Anxiety & Depression Association of America",
    description: "Resources for anxiety, depression, OCD, PTSD, and more.",
    url: "https://adaa.org",
    icon: "🌐",
  },
];

const Resources = () => {
  return (
    <div className="page">
      <Header />

      <main className="main">

        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-badge">🧠 Mental Wellness Support</div>

            <h1 className="hero-title">
              Trusted <span>Mental Health Resources</span>
            </h1>

            <p className="hero-text">
              You're not alone. Explore verified helplines, support networks, and
              mental-wellbeing tools designed to guide you every step of the way.
            </p>
          </div>
        </section>

        {/* EMERGENCY SECTION */}
        <section className="emergency">
          <h2>🚨 In Case of Emergency</h2>
          <p>
            If you or someone you know is in immediate danger, call emergency services right away.
          </p>

          <div className="emergency-buttons">
            <a href="tel:911" className="btn-danger">📞 Call 911</a>
            <a href="tel:988" className="btn-primary">📞 Call 988</a>
          </div>
        </section>

        {/* HELPLINES */}
        <section className="helplines">
          <h2>📞 Crisis Helplines</h2>

          <div className="grid">
            {helplines.map((hl, i) => (
              <a key={i} href={hl.url} target="_blank" rel="noopener noreferrer" className="card">
                <div className="icon">{hl.icon}</div>
                <h3>{hl.name}</h3>
                <p className="phone">{hl.phone}</p>
                <p>{hl.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* EDUCATIONAL RESOURCES */}
        <section className="resources">
          <h2>📚 Educational Resources</h2>

          <div className="grid">
            {resources.map((res, i) => (
              <a key={i} href={res.url} target="_blank" rel="noopener noreferrer" className="card">
                <div className="icon">{res.icon}</div>
                <h3>{res.name}</h3>
                <p>{res.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="disclaimer">
          <h2>⚠️ Important Disclaimer</h2>
          <p>
            <strong>MindfulAI is not a medical tool.</strong> This platform provides AI-based sentiment analysis for informational purposes only.
          </p>
          <p>
            It does not diagnose, treat, or prevent any mental health condition. Please seek a licensed professional when needed.
          </p>
        </section>
      </main>

  
    </div>
  );
};

export default Resources;
