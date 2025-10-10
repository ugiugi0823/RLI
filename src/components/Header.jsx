import { motion } from 'framer-motion'
import { FaFilePdf, FaGithub, FaQuoteLeft } from 'react-icons/fa'
import './Header.css'

const Header = ({ scrolled }) => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header 
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container header-content">
        <motion.h1 
          className="title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          RLI: Residual Learning in Inversion for Image Editing
        </motion.h1>
        
        <motion.p 
          className="conference"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          ICCV Workshop 2025
        </motion.p>
        
        <motion.div 
          className="authors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <span className="author">Your Name</span><sup>1</sup>
        </motion.div>
        
        <motion.div 
          className="affiliations"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <sup>1</sup>Your Institution
        </motion.div>
        
        <motion.div 
          className="links"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a href="#" className="btn btn-paper">
            <FaFilePdf /> Paper
          </a>
          <a href="https://github.com/ugiugi0823/RLI" className="btn btn-code" target="_blank" rel="noopener noreferrer">
            <FaGithub /> Code
          </a>
          <button onClick={() => scrollToSection('citation')} className="btn btn-bibtex">
            <FaQuoteLeft /> BibTeX
          </button>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header

