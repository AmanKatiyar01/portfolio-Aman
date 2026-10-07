import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink></li>
        <li><NavLink to="/skills" className={({ isActive }) => (isActive ? "active" : "")}>Skills</NavLink></li>
        <li><NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>Projects</NavLink></li>
        <li><NavLink to="/education" className={({ isActive }) => (isActive ? "active" : "")}>Education</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;