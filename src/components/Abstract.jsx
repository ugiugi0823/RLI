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
          본 연구는 텍스트 기반 이미지 편집에서 배경 보존 문제를 해결하기 위한 새로운 접근법을 제안합니다. 
          기존의 Diffusion 기반 편집 방법들(Prompt-to-Prompt, MasaCtrl, Plug-and-Play 등)은 목표 객체를 
          편집할 때 의도하지 않은 배경 변화가 발생하는 문제가 있습니다.
        </p>
        <p>
          우리의 방법인 <strong>RLI (Residual Learning in Inversion)</strong>는 U-Net의 Self-Attention Layer에서 
          Residual Fusion을 적용하여 이 문제를 효과적으로 해결합니다. 실험 결과, 제안된 방법은 다양한 편집 
          방법(P2P, MasaCtrl, Null-text Inversion, Negative-prompt Inversion 등)에 적용 가능하며, 
          배경 보존 성능을 크게 향상시킵니다.
        </p>
      </div>
    </motion.section>
  )
}

export default Abstract

