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
          우리의 방법은 두 가지 주요 단계로 구성됩니다:
        </p>
        <ul>
          <li>
            <strong>Image Reconstruction:</strong> 원본 이미지를 Denoising U-Net을 통해 재구성합니다. 
            이 과정에서 소스 프롬프트를 사용하여 이미지의 특징을 학습합니다.
          </li>
          <li>
            <strong>Image Editing:</strong> 타겟 프롬프트를 사용하여 이미지를 편집하며, 
            Self-Attention Layer의 Up Blocks에서 Residual Fusion을 적용합니다. 
            이를 통해 편집 영역 외의 배경을 효과적으로 보존합니다.
          </li>
        </ul>
        <p>
          핵심 아이디어는 <strong>Self-Attention Layer에서 Residual을 학습</strong>하는 것입니다. 
          Query, Key, Value를 통한 기존 attention 결과에 residual을 가중치(α)로 융합하여 
          배경 정보를 보존합니다. 이 방법은 다양한 편집 방법과 inversion 기법에 
          플러그인 형태로 쉽게 통합될 수 있습니다.
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
          <strong>그림 2.</strong> 제안된 RLI 프레임워크. Image Reconstruction과 Image Editing 단계를 
          거치며, U-Net의 Self-Attention Layer Up Blocks에서 Residual Fusion을 적용합니다. 
          오른쪽 상세 그림에서 Pre-attention Features와 Post-attention Features 사이에 
          Residual을 융합하는 과정을 확인할 수 있습니다.
        </p>
      </div>
    </motion.section>
  )
}

export default Method

