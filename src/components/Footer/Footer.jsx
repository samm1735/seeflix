import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">SeeFlix</h2>
        <p>© 2026 Seeflix. All rights reserved.</p>
        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/media">Media</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;