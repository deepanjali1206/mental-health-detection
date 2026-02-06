import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            ❤️ <span>MindfulAI</span>
          </Link>
          <p>
            Supporting mental wellness through AI-powered sentiment analysis.
            Your emotional health matters.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/analyze">Analyze Mood</Link>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/resources">Resources</Link>
        </div>

        {/* Get Help */}
        <div className="footer-section">
          <h4>Get Help</h4>
          <a href="tel:988">📞 988 Suicide & Crisis Lifeline</a>
          <a
            href="https://www.nimh.nih.gov"
            target="_blank"
            rel="noreferrer"
          >
            🌐 NIMH Resources
          </a>
        </div>

        {/* Privacy */}
        <div className="footer-section">
          <h4>Privacy</h4>
          <p>
            🔒 Your data is processed securely and never stored. Your privacy and
            confidentiality are our priority.
          </p>
        </div>
      </div>

      
      
    </footer>
  );
};

export default Footer;
