import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Resources.css";


// We'll use emojis for simplicity instead of Lucide icons
const helplines = [
  {
    name: "988 Suicide & Crisis Lifeline",
    phone: "988",
    description: "24/7 free and confidential support for people in distress.",
    url: "https://988lifeline.org",
    icon: "📞",
  },
  {
    name: "Crisis Text Line",
    phone: "Text HOME to 741741",
    description: "Free 24/7 text-based mental health support.",
    url: "https://www.crisistextline.org",
    icon: "💬",
  },
  {
    name: "SAMHSA National Helpline",
    phone: "1-800-662-4357",
    description: "Treatment referrals and information service for mental health.",
    url: "https://www.samhsa.gov/find-help/national-helpline",
    icon: "📞",
  },
  {
    name: "NAMI Helpline",
    phone: "1-800-950-6264",
    description: "National Alliance on Mental Illness information and support.",
    url: "https://www.nami.org/help",
    icon: "👥",
  },
];

const resources = [
  {
    name: "National Institute of Mental Health",
    description: "Comprehensive information on mental health conditions and treatments.",
    url: "https://www.nimh.nih.gov",
    icon: "🌐",
  },
  {
    name: "Mental Health America",
    description: "Screening tools, resources, and community support.",
    url: "https://www.mhanational.org",
    icon: "❤️",
  },
  {
    name: "Anxiety and Depression Association",
    description: "Resources for anxiety, depression, OCD, PTSD, and related disorders.",
    url: "https://adaa.org",
    icon: "🌐",
  },
];

const Resources = () => {
  return (
    <div className="page">
      <Header />
      <main className="main">
        {/* Hero */}
        <section className="hero">
          <h1>Mental Health Resources</h1>
          <p>You're not alone. Here are trusted resources and helplines available to support your mental health journey.</p>
        </section>

        {/* Emergency Notice */}
        <section className="emergency">
          <h2>In Case of Emergency</h2>
          <p>If you or someone you know is in immediate danger or experiencing a mental health crisis, call emergency services immediately.</p>
          <div className="emergency-buttons">
            <a href="tel:911" className="btn-danger">📞 Call 911</a>
            <a href="tel:988" className="btn-primary">📞 Call 988</a>
          </div>
        </section>

        {/* Helplines */}
        <section className="helplines">
          <h2>Crisis Helplines</h2>
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

        {/* Educational Resources */}
        <section className="resources">
          <h2>Educational Resources</h2>
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

        {/* Disclaimer */}
        <section className="disclaimer">
          <h2>Important Disclaimer</h2>
          <p><strong>MindfulAI is not a medical tool.</strong> The sentiment analysis and mental health indicators are for informational purposes only.</p>
          <p>This tool does not diagnose, treat, cure, or prevent any mental health condition. Always consult a qualified professional if needed.</p>
        </section>
      </main>
    
    </div>
  );
};

export default Resources;
