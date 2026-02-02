import "./Home.css";

const features = [
  {
    icon: "🧠",
    title: "Advanced NLP Analysis",
    description:
      "Uses natural language processing to understand emotional tone in your text.",
  },
  {
    icon: "📊",
    title: "Sentiment Detection",
    description:
      "Detects positive, negative, and neutral emotions with clarity.",
  },
  {
    icon: "❤️",
    title: "Mental Health Indicators",
    description:
      "Helps identify early signs of stress, anxiety, or low mood.",
  },
  {
    icon: "🛡️",
    title: "Complete Privacy",
    description:
      "Your data is never stored. Everything stays private and secure.",
  },
  {
    icon: "✨",
    title: "Instant Results",
    description:
      "Get analysis results within seconds after submitting text.",
  },
  {
    icon: "⏰",
    title: "Available 24/7",
    description:
      "Use the platform anytime you need emotional insights.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="features">
      <h2 className="section-title">
        How We Support Your <span>Mental Wellness</span>
      </h2>

      <p className="section-subtitle">
        Our AI-powered system provides meaningful emotional insights while
        respecting your privacy.
      </p>

      <div className="features-grid">
        {features.map((item) => (
          <div className="feature-card" key={item.title}>
            <div className="feature-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
