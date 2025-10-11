import { motion } from 'framer-motion'

const Method = () => {
  return (
    <motion.section 
      className="section container" 
      id="method"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">Method</h2>
      
      <div className="figure-container">
        <motion.img 
          src="/RLI/asset/2.jpg" 
          alt="Method Pipeline" 
          className="figure-img"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
        <p className="figure-caption">
          <strong>Figure 2.</strong> The pipeline of our proposed Residual Linear Interpolation.
        </p>
      </div>
    </motion.section>
  )
}

export default Method

