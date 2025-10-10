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
      <h2 className="section-title">정성적 결과</h2>
      <div className="text-content">
        <p>
          다양한 편집 시나리오에서 RLI의 효과를 확인할 수 있습니다. 
          여러 baseline 방법들(P2P, MasaCtrl, PnP 등)과 다양한 inversion 기법(DDIM, Direct Inversion, 
          Null-text Inversion, Negative-prompt Inversion)의 조합에 RLI를 적용했을 때, 
          편집 영역 외의 배경이 더욱 잘 보존되는 것을 볼 수 있습니다.
        </p>
        <p>
          특히 복잡한 배경을 가진 이미지에서도 목표 객체만을 정확하게 편집하면서 
          주변 환경은 원본과 동일하게 유지하는 것을 확인할 수 있습니다.
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
          <strong>그림 3.</strong> 다양한 편집 방법들(Editing: P2P, MasaCtrl, PnP / 
          Inversion: DDIM, Direct, Null-text, Negative-prompt)에 RLI를 적용한 정성적 결과. 
          각 행은 서로 다른 편집 작업을 보여주며, 붉은 원은 의도하지 않은 배경 변화를 나타냅니다. 
          RLI를 적용한 "+ RLI" 열에서는 이러한 문제가 크게 개선되어 배경이 더욱 잘 보존됩니다.
        </p>
      </div>
    </motion.section>
  )
}

export default QualitativeResults

