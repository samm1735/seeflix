import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const location = useLocation();

  const isCurrent = (path) => location.pathname === path ? "current-path" : "";

  return (
    <nav className="navbar">
      <h1 className="navbar-title">Seeflix</h1>
      <ul className="navbar-links">
        <li><Link to="/" className={isCurrent("/")}>Home</Link></li>
        <li><Link to="/media" className={isCurrent("/media")}>Media</Link></li>
        <li><Link to="/about" className={isCurrent("/about")}>About</Link></li>
        <li><Link to="/contact" className={isCurrent("/contact")}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;