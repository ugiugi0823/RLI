import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaCopy, FaCheck } from 'react-icons/fa'
import './Citation.css'

const Citation = () => {
  const [copied, setCopied] = useState(false)

  const bibtex = `@inproceedings{rli2025,
  title={RLI: Residual Learning in Inversion for Image Editing},
  author={Your Name},
  booktitle={ICCV Workshop},
  year={2025}
}`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bibtex)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.section 
      className="section container" 
      id="citation"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">Citation</h2>
      <div className="text-content">
        <p>
          본 연구가 유용하셨다면 다음과 같이 인용해 주세요:
        </p>
      </div>
      <div className="bibtex-container">
        <button className="copy-btn" onClick={copyToClipboard}>
          {copied ? <FaCheck /> : <FaCopy />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
        <pre><code>{bibtex}</code></pre>
      </div>
      
      <div className="text-content" style={{ marginTop: '30px' }}>
        <h3 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>Acknowledgements</h3>
        <p>
          This work was supported by [Your Institution/Grant]. 
          We thank all the reviewers for their valuable feedback and suggestions.
        </p>
      </div>
    </motion.section>
  )
}

export default Citation

