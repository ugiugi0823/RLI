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
          <strong>Figure 2.</strong> The proposed RLI framework. It goes through Image Reconstruction and 
          Image Editing stages, applying residual fusion in the self-attention layer up blocks of the U-Net. 
          The detailed diagram on the right shows the process of fusing residuals between pre-attention 
          features and post-attention features.
        </p>
      </div>
    </motion.section>
  )
}

export default Method

