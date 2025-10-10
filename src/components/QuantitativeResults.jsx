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
      <div className="text-content">
        <p>
          RLI consistently shows performance improvements in quantitative evaluations as well. 
          We validated the effectiveness of RLI through various metrics:
        </p>
        <ul>
          <li>
            <strong>Structure Distance (↓):</strong> Measures structural similarity with the original image, 
            where lower values indicate better background preservation. RLI showed an average improvement 
            of 10-25% when applied.
          </li>
          <li>
            <strong>PSNR (↑)</strong> and <strong>SSIM (↑):</strong> Traditional image quality metrics that 
            measure pixel-level and structural similarity. Consistent improvements were observed in both metrics.
          </li>
          <li>
            <strong>LPIPS (↓):</strong> A metric that measures perceptual similarity, where lower values 
            indicate greater similarity to the original. RLI showed significant improvement in this metric 
            (up to 49% improvement), generating results that align with human visual perception.
          </li>
          <li>
            <strong>CLIP Score (↑):</strong> Measures how well the edited image matches the target prompt. 
            RLI improved the CLIP score by faithfully reflecting the editing intent while preserving 
            the background.
          </li>
        </ul>
      </div>
      
      <div className="figure-container">
        <motion.img 
          src="/RLI/asset/4.png" 
          alt="Quantitative Results" 
          className="figure-img"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
        <p className="figure-caption">
          <strong>Table 1.</strong> Quantitative results of applying RLI to combinations of various editing 
          methods (P2P, MasaCtrl, PnP) and inversion techniques (DDIM, Direct, NT, NP). 
          The green checkmark (✓) indicates RLI application, and the percentages in parentheses represent 
          the improvement rate. Performance improved across all metrics when RLI was applied, with 
          particularly significant improvements in background preservation-related metrics 
          (Structure Distance, LPIPS).
        </p>
      </div>
    </motion.section>
  )
}

export default QuantitativeResults

