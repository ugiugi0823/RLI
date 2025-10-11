import { motion } from 'framer-motion'

const QualitativeResults = () => {
  return (
    <motion.section 
      className="section container" 
      id="qualitative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">Qualitative Results</h2>
      
      <div className="figure-container">
        <motion.img 
          src="/RLI/asset/3.jpg" 
          alt="Qualitative Results" 
          className="figure-img"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
        <p className="figure-caption">
          <strong>Figure 3.</strong> Image editing results of Prompt-to-Prompt model with various inversion methods with and without RLI.
        </p>
      </div>
    </motion.section>
  )
}

export default QualitativeResults

