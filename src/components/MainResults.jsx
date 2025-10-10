import { motion } from 'framer-motion'

const MainResults = () => {
  return (
    <motion.section 
      className="section container" 
      id="main-results"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">Background Preservation Comparison</h2>
      <div className="figure-container">
        <motion.img 
          src="/RLI/asset/1.jpg" 
          alt="Demo" 
          className="figure-img"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
        <p className="figure-caption">
          <strong>Figure 1.</strong> Comparison of background preservation performance with various editing methods. 
          When RLI is applied (w/ ours), the background is better preserved, showing significant performance 
          improvements in metrics such as LPIPS and PSNR. The difference in background preservation can be 
          clearly seen in the areas marked with red circles.
        </p>
      </div>
    </motion.section>
  )
}

export default MainResults

