import { useState } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  const closeMenu = () => {
    setShowMenu(false);
  }

  return (
    <nav className="navbar">
      <div className="logo">Parth Lad</div>
      <ul className={showMenu ? "nav-link-mobile" : "nav-links"}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
      <div className='ham-menu'>
        <button onClick={toggleMenu}>
          <GiHamburgerMenu/>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;