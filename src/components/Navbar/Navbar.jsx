import { useState } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaSun, FaMoon } from "react-icons/fa";

function Navbar({ toggleTheme, theme }) {
  const [menuState, setMenuState] = useState(""); // "open" | "close" | ""

  const toggleMenu = () => {
    if (menuState === "open") {
      setMenuState("close");   // start closing animation
    } else {
      setMenuState("open");    // start opening animation
    }
  };

  const closeMenu = () => {
    setMenuState("close");
  };

  return (
    <nav className="navbar">
      <div className="logo">Parth Lad</div>

      {/* Desktop Menu */}
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <button className={`theme-toggle ${theme}`} onClick={toggleTheme}>
            <span className="toggle-circle">{theme === "light" ? 
              <FaMoon size={12} color='black'/> : <FaSun size={12}/>}</span>
          </button>
        </li>

      </ul>

      {/* Mobile Sliding Menu */}
      <ul className={`nav-link-mobile ${menuState}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        <li>
          <button className={`theme-toggle ${theme}`} onClick={()=>{toggleTheme(); closeMenu()}}>
            <span className="toggle-circle">{theme === "light" ? 
              <FaMoon size={12} color='black'/> : <FaSun size={12}/>}</span>
          </button>
        </li>
      </ul>

      {/* Hamburger Button */}
      <div className="ham-menu">
        <button onClick={toggleMenu}>
          {menuState === "open"
            ? <IoClose size={30} color={theme === "light" ? "#151515" : "#E0E0E0"} />
            : <GiHamburgerMenu size={25} color={theme === "light" ? "#151515" : "#E0E0E0"} />
          }
        </button>
      </div>
    </nav>
  );
}

export default Navbar;