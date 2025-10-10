import { motion } from 'framer-motion'

const Abstract = () => {
  return (
    <motion.section 
      className="section container" 
      id="abstract"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">Abstract</h2>
      <div className="text-content">
        <p>
          With the advancement of diffusion models, a wide range of image editing techniques have also been developed. 
          To support these, various inversion methods have been introduced to preserve the original content. However, 
          these inversion methods often exhibit instability, often failing to reconstruct certain images, particularly 
          when applied to high-resolution diffusion models equipped with deep U-Nets.
        </p>
        <p>
          To address this issue, we propose a novel plug-and-play <strong>RLI (Residual Linear Interpolation)</strong> method. 
          During the forward process, the method operates within the self-attention mechanism and performs an interpolation 
          between the attention values before and after the computation. This interpolation mitigates abrupt changes in 
          the attention map, thereby enabling smoother transitions in spatial representations and reducing unintended 
          distortions of the original content.
        </p>
        <p>
          Our method is compatible with various existing diffusion model variants, inversion techniques, and image editing 
          approaches. In particular, it provides a significant solution to the reconstruction failure observed when using 
          Null-text Inversion with SDXL, where the null-text optimization does not converge properly. In addition, we 
          demonstrate that, when combined with diverse inversion methods and image editing methods across multiple 
          diffusion models, our approach achieves superior preservation of the original content, both quantitatively and 
          qualitatively, without compromising the existing editing performance.
        </p>
      </div>
    </motion.section>
  )
}

export default Abstract

