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
      <h2 className="section-title">정량적 결과</h2>
      <div className="text-content">
        <p>
          정량적 평가에서도 RLI는 일관되게 성능 향상을 보여줍니다. 
          다양한 메트릭을 통해 RLI의 효과를 검증했습니다:
        </p>
        <ul>
          <li>
            <strong>Structure Distance (↓):</strong> 원본 이미지와의 구조적 유사도를 측정하며, 
            낮을수록 배경이 잘 보존되었음을 의미합니다. RLI 적용 시 평균 10-25% 향상을 보였습니다.
          </li>
          <li>
            <strong>PSNR (↑)</strong> 및 <strong>SSIM (↑):</strong> 픽셀 레벨과 구조적 유사도를 측정하는 
            전통적인 이미지 품질 메트릭입니다. 두 지표 모두에서 일관된 향상을 보였습니다.
          </li>
          <li>
            <strong>LPIPS (↓):</strong> 지각적 유사도를 측정하는 메트릭으로, 낮을수록 원본과 유사합니다. 
            RLI는 특히 이 메트릭에서 큰 개선(최대 49% 향상)을 보여 인간의 시각적 인지와 
            일치하는 결과를 생성합니다.
          </li>
          <li>
            <strong>CLIP Score (↑):</strong> 편집된 이미지가 타겟 프롬프트와 얼마나 잘 일치하는지를 
            측정합니다. RLI는 배경을 보존하면서도 편집 의도를 충실히 반영하여 
            CLIP Score도 향상시켰습니다.
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
          <strong>표 1.</strong> 다양한 편집 방법(P2P, MasaCtrl, PnP)과 
          inversion 기법(DDIM, Direct, NT, NP)의 조합에 RLI를 적용한 정량적 결과. 
          녹색 체크(✓)는 RLI 적용을 의미하며, 괄호 안의 퍼센티지는 개선율을 나타냅니다. 
          모든 메트릭에서 RLI를 적용했을 때 성능이 개선되었으며, 
          특히 배경 보존 관련 지표(Structure Distance, LPIPS)에서 큰 향상을 보였습니다.
        </p>
      </div>
    </motion.section>
  )
}

export default QuantitativeResults

