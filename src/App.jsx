import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './sections/Home.jsx'
import About from './sections/About.jsx'
import Skills from './sections/Skills.jsx'
import Experience from './sections/Experience.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
    </>
  )
}

export default App
