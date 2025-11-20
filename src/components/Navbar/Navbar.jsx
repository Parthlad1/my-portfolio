import { useState } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaSun, FaMoon } from "react-icons/fa";

function Navbar({ toggleTheme, theme }) {
  const [showMenu, setShowMenu] = useState(false);
  const [isopen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setIsOpen(!isopen);
  }

  const closeMenu = () => {
    setShowMenu(false);
    setIsOpen(false);
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
        <li><a href="" onClick={(e)=>{e.preventDefault(); toggleTheme(); closeMenu()}}>{theme === "light" ? <FaMoon size={18}/> : <FaSun size={18}/>}</a></li>
      </ul>
      <div className='ham-menu'>
        <button onClick={toggleMenu}>
          {isopen ? <IoClose size={30} color={theme === "light" ? "#151515" : "#E0E0E0"}/>
          : <GiHamburgerMenu size={25} color={theme === "light" ? "#151515" : "#E0E0E0"}/>}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;