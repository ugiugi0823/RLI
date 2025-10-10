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
      <div className="text-content">
        <p>
          The effectiveness of RLI can be observed across various editing scenarios. 
          When RLI is applied to combinations of multiple baseline methods (P2P, MasaCtrl, PnP, etc.) 
          and various inversion techniques (DDIM, Direct Inversion, Null-text Inversion, Negative-prompt Inversion), 
          the background outside the editing region is better preserved.
        </p>
        <p>
          In particular, even in images with complex backgrounds, we can confirm that only the target object 
          is accurately edited while the surrounding environment remains identical to the original.
        </p>
      </div>
      
      <div className="figure-container">
        <motion.img 
          src="/RLI/asset/3.jpg" 
          alt="Qualitative Results" 
          className="figure-img"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
        <p className="figure-caption">
          <strong>Figure 3.</strong> Qualitative results of applying RLI to various editing methods 
          (Editing: P2P, MasaCtrl, PnP / Inversion: DDIM, Direct, Null-text, Negative-prompt). 
          Each row shows a different editing task, and red circles indicate unintended background changes. 
          In the "+ RLI" column where RLI is applied, these issues are significantly improved and the 
          background is better preserved.
        </p>
      </div>
    </motion.section>
  )
}

export default QualitativeResults

