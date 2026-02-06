import { Link } from "react-router-dom";
import "./Home.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge"> AI-Powered Mental Wellness</div>

        <h1 className="hero-title">
          Understand Your <span>Emotional State</span>
          <br /> One Text at a Time
        </h1>

        <p className="hero-text">
          Our AI analyzes your thoughts and feelings to provide insights into your
          emotional well-being. Take the first step toward understanding yourself.
        </p>

        <div className="hero-buttons">
          <Link to="/analyze" className="btn primary">
            Analyze Your Mood →
          </Link>
          <Link to="/how-it-works" className="btn outline">
            Learn How It Works
          </Link>
        </div>

        <div className="hero-trust">
          <div>🔒 100% Private</div>
          <div>🧠 NLP Powered</div>
          <div>❤️ Wellness Focused</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
