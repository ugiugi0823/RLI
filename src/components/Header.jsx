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
        <motion.div 
          className="logos"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <img src="/RLI/asset/ICCV_logo.png" alt="ICCV Logo" className="logo iccv-logo" />
          <img src="/RLI/asset/inha.svg" alt="Inha University Logo" className="logo inha-logo" />
          <img src="/RLI/asset/icon_blue_white.png" alt="Visual Computing & Learning Lab Logo" className="logo vcl-logo" />
        </motion.div>

        <motion.h1 
          className="title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          A Plug-and-Play Approach for Robust Image Editing in Text-to-Image Diffusion Models
        </motion.h1>
        
        <motion.p 
          className="conference"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          ICCV Workshop 2025
        </motion.p>
        
        <motion.p 
          className="workshop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          MMFM4: The 4th Workshop on What is Next in Multimodal Foundation Models?
        </motion.p>
        
        <motion.div 
          className="authors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <span className="author">Hyunwook Jo</span>,
          <span className="author">Jiseung Maeng</span>,
          <span className="author">Jun Hyung Park</span>,
          <span className="author">Namhyuk Ahn</span>, and
          <span className="author">In Kyu Park</span>
        </motion.div>
        
        <motion.div 
          className="affiliations"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p>Department of Electrical and Computer Engineering, Inha University</p>
          <p>Incheon 22212, Korea</p>
          <p className="emails">
            {'{acerghjk@inha.edu, jiseung@inha.edu, kevin2001112@inha.edu, nhahn@inha.ac.kr, pik@inha.ac.kr}'}
          </p>
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
          <a href="https://github.com/ugiugi0823/ICCVW-RLI" className="btn btn-code" target="_blank" rel="noopener noreferrer">
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

