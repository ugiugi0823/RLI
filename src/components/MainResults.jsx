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
      <h2 className="section-title">Demo</h2>
      <div className="figure-container">
        <motion.img 
          src="/RLI/asset/1.jpg" 
          alt="Demo" 
          className="figure-img"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
        <p className="figure-caption">
          <strong>Figure 1.</strong> Our simple yet effective RLI method integrates seamlessly into various image editing techniques, consistently improving results qualitatively and quantitatively. RLI ensures superior preservation of original content and background, while enabling robust image editing that faithfully aligns with textual prompts, overcoming prior limitations in semantic accuracy and structural preservation.
        </p>
      </div>
    </motion.section>
  )
}

export default MainResults

