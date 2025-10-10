import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container footer-content">
        <div className="footer-section">
          <h3>RLI Project</h3>
          <p>Residual Learning in Inversion for Image Editing</p>
          <p className="conference-tag">ICCV Workshop 2025</p>
        </div>
        
        <div className="footer-section">
          <h3>Contact</h3>
          <div className="contact-links">
            <a href="mailto:your-email@example.com" className="contact-link">
              <FaEnvelope />
              your-email@example.com
            </a>
            <a href="https://github.com/ugiugi0823/RLI" className="contact-link" target="_blank" rel="noopener noreferrer">
              <FaGithub />
              GitHub Repository
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <div className="quick-links">
            <a href="#abstract">Abstract</a>
            <a href="#method">Method</a>
            <a href="#qualitative">Results</a>
            <a href="#citation">Citation</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2025 RLI Project. All rights reserved.</p>
          <p>Built with React + Vite + Framer Motion</p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer

