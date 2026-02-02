import { Link } from "react-router-dom";
import "./Home.css";

const CTASection = () => {
  return (
    <section className="cta">
      <div className="cta-box">
        <div className="cta-icon">💬</div>

        <h2>Ready to Understand Your Emotions?</h2>

        <p>
          Take a moment to reflect on how you’re feeling. Our AI is here to help
          you gain emotional insights without judgment.
        </p>

        <Link to="/analyze" className="btn primary">
          Start Your Analysis →
        </Link>

        <small>
          Free to use • No account required • Privacy protected
        </small>
      </div>
    </section>
  );
};

export default CTASection;
