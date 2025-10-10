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
      <div className="text-content">
        <p>
          Our method consists of two main stages:
        </p>
        <ul>
          <li>
            <strong>Image Reconstruction:</strong> The original image is reconstructed through a denoising U-Net. 
            During this process, the source prompt is used to learn the features of the image.
          </li>
          <li>
            <strong>Image Editing:</strong> The image is edited using the target prompt, while residual fusion 
            is applied in the up blocks of the self-attention layers. This effectively preserves the background 
            outside the editing region.
          </li>
        </ul>
        <p>
          The key idea is to <strong>learn residuals in the self-attention layers</strong>. The residual is 
          fused with weight (α) to the existing attention results through Query, Key, and Value, thereby 
          preserving background information. This method can be easily integrated as a plug-in into various 
          editing methods and inversion techniques.
        </p>
      </div>
      
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

