import { useState } from 'react';
import './Navbar.css';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';

function Navbar({ toggleTheme, theme }) {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <a className="logo" href="#home" onClick={closeMenu}>Parth<span>.</span></a>
      <ul className="nav-links">
        {links.map((link) => <li key={link}><a href={`#${link.toLowerCase()}`}>{link}</a></li>)}
        <li><button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
          {theme === 'dark' ? <FiSun /> : <FiMoon />}
        </button></li>
      </ul>
      <button className="menu-button" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isOpen}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={closeMenu}>{link}</a>)}
        <button className="mobile-theme" onClick={toggleTheme}>{theme === 'dark' ? 'Use light theme' : 'Use dark theme'}</button>
      </div>
    </nav>
  );
}

export default Navbar;
