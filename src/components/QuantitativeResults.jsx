import { motion } from 'framer-motion'

const QuantitativeResults = () => {
  return (
    <motion.section 
      className="section container" 
      id="quantitative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">Quantitative Results</h2>
      
      <div className="figure-container">
        <motion.img 
          src="/RLI/asset/4.png" 
          alt="Quantitative Results" 
          className="figure-img"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
        <p className="figure-caption">
          <strong>Table 1.</strong> 
        </p>
      </div>
    </motion.section>
  )
}

export default QuantitativeResults

