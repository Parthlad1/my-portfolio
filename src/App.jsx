import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './sections/Home.jsx'
import About from './sections/About.jsx'
import Skills from './sections/Skills.jsx'
import Experience from './sections/Experience.jsx'
import Project from './sections/Project.jsx'
import Contact from './sections/Contact.jsx'

function App() {
    // Load saved theme OR default to "light"
  const [theme, setTheme] = useState("dark");

  // Toggle ONLY Home section theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={theme === "light" ? "app" : "app dark"}>
      <Navbar toggleTheme={toggleTheme} theme={theme}/>
      <Home />
      <About />
      <Skills />
      <Experience />
      <Project />
      <Contact />
    </div>
  )
}

export default App
