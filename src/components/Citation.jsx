import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaCopy, FaCheck } from 'react-icons/fa'
import './Citation.css'

const Citation = () => {
  const [copied, setCopied] = useState(false)

  const bibtex = `@inproceedings{jo2025plug,
  title={A Plug-and-Play Approach for Robust Image Editing in Text-to-Image Diffusion Models},
  author={Jo, Hyunwook and Maeng, Jiseung and Park, Jun Hyung and Ahn, Namhyuk and Park, In Kyu},
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
          If you find this work useful, please cite it as follows:
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
          This work was supported by Institute of Information & communications Technology Planning & Evaluation (IITP) 
          grant funded by the Korea government (MSIT) (No.RS-2022-00155911, Artificial Intelligence Convergence Innovation 
          Human Resources Development (Inha University)). We thank all the reviewers for their valuable feedback and suggestions.
        </p>
      </div>
    </motion.section>
  )
}

export default Citation

