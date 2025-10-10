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
      <h2 className="section-title">배경 보존 성능 비교</h2>
      <div className="figure-container">
        <motion.img 
          src="/RLI/asset/1.jpg" 
          alt="Background Preservation Comparison" 
          className="figure-img"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
        <p className="figure-caption">
          <strong>그림 1.</strong> 다양한 편집 방법들과의 배경 보존 성능 비교. 
          RLI를 적용한 경우 (w/ ours) 배경이 더 잘 보존되며, LPIPS, PSNR 등의 메트릭에서 
          큰 성능 향상을 보입니다. 붉은 원으로 표시된 영역에서 배경 보존의 차이를 명확히 확인할 수 있습니다.
        </p>
      </div>
    </motion.section>
  )
}

export default MainResults

