import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Abstract from './components/Abstract'
import MainResults from './components/MainResults'
import Method from './components/Method'
import QualitativeResults from './components/QualitativeResults'
import QuantitativeResults from './components/QuantitativeResults'
import Citation from './components/Citation'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      <Header scrolled={scrolled} />
      <main className="main-content">
        <MainResults />
        <Abstract />
        <Method />
        <QualitativeResults />
        <QuantitativeResults />
        <Citation />
      </main>
      <Footer />
    </div>
  )
}

export default App

