# React + GitHub Pages 배포 가이드 🚀

## 📦 프로젝트 구조

```
RLI/
├── public/
│   └── asset/              # 이미지 파일들
│       ├── 1.jpg
│       ├── 2.jpg
│       ├── 3.jpg
│       └── 4.png
├── src/
│   ├── components/         # React 컴포넌트들
│   │   ├── Header.jsx
│   │   ├── Abstract.jsx
│   │   ├── MainResults.jsx
│   │   ├── Method.jsx
│   │   ├── QualitativeResults.jsx
│   │   ├── QuantitativeResults.jsx
│   │   ├── Citation.jsx
│   │   └── Footer.jsx
│   ├── App.jsx            # 메인 App 컴포넌트
│   ├── App.css            # App 스타일
│   ├── main.jsx           # React 진입점
│   └── index.css          # 글로벌 스타일
├── index.html             # HTML 엔트리포인트
├── package.json           # 프로젝트 설정
├── vite.config.js         # Vite 설정
└── README.md              # 프로젝트 설명

```

## 🛠️ 설치 및 실행

### 1. 의존성 설치

```bash
cd "/Users/jhw/Downloads/[S2023] My_paper/2025/ICCVW 2025/RLI"

# npm 사용
npm install

# 또는 yarn 사용
# yarn install

# 또는 pnpm 사용
# pnpm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 http://localhost:5173 으로 접속하여 확인하세요.

### 3. 빌드 테스트

```bash
npm run build
npm run preview
```

## 🚀 GitHub Pages 배포

### 방법 1: 자동 배포 (추천)

```bash
# 빌드 및 배포를 한 번에
npm run deploy
```

이 명령어는 다음을 자동으로 수행합니다:
1. `npm run build` - 프로젝트 빌드
2. `gh-pages -d dist` - dist 폴더를 gh-pages 브랜치에 배포

### 방법 2: 수동 배포

```bash
# 1. 빌드
npm run build

# 2. 배포
npx gh-pages -d dist
```

### 처음 배포하는 경우

```bash
# 1. Git 초기화 (아직 안했다면)
git init
git add .
git commit -m "Initial commit: React version"

# 2. GitHub 저장소 연결
git branch -M main
git remote add origin https://github.com/ugiugi0823/RLI.git
git push -u origin main

# 3. 배포
npm run deploy
```

### GitHub Pages 설정

1. GitHub 저장소로 이동: https://github.com/ugiugi0823/RLI
2. **Settings** → **Pages** 클릭
3. **Source** 설정:
   - Branch: `gh-pages` 선택
   - Folder: `/ (root)` 선택
4. **Save** 클릭

약 1-2분 후 다음 URL에서 확인:
**https://ugiugi0823.github.io/RLI/**

## 🎨 주요 기능

### ✨ Framer Motion 애니메이션
- 스크롤 시 부드러운 페이드인 효과
- 이미지 호버 시 확대 효과
- 헤더 스크롤 시 축소 효과

### 📱 반응형 디자인
- 모바일, 태블릿, 데스크톱 모두 최적화
- 유동적인 레이아웃
- 터치 친화적 인터페이스

### 🎯 주요 컴포넌트
- **Header**: Sticky 헤더, 스크롤 감지
- **Abstract**: 연구 요약
- **MainResults**: 주요 결과 비교
- **Method**: 방법론 설명
- **QualitativeResults**: 정성적 결과
- **QuantitativeResults**: 정량적 결과
- **Citation**: BibTeX 복사 기능
- **Footer**: 연락처 및 링크

## ✏️ 커스터마이징

### 저자 정보 수정

`src/components/Header.jsx`:
```jsx
<div className="authors">
  <span className="author">Your Name</span><sup>1</sup>
</div>

<div className="affiliations">
  <sup>1</sup>Your Institution
</div>
```

### BibTeX 수정

`src/components/Citation.jsx`:
```jsx
const bibtex = `@inproceedings{rli2025,
  title={RLI: Residual Learning in Inversion for Image Editing},
  author={Your Name},  // 여기 수정
  booktitle={ICCV Workshop},
  year={2025}
}`
```

### 색상 테마 변경

`src/index.css`:
```css
:root {
  --primary-color: #667eea;      /* 주 색상 */
  --secondary-color: #764ba2;    /* 보조 색상 */
  --text-color: #333;            /* 텍스트 색상 */
  --bg-color: #f8f9fa;          /* 배경 색상 */
}
```

### Paper 링크 추가

`src/components/Header.jsx`:
```jsx
<a href="YOUR_PAPER_URL" className="btn btn-paper">
  <FaFilePdf /> Paper
</a>
```

### Contact 정보 수정

`src/components/Footer.jsx`:
```jsx
<a href="mailto:your-email@example.com" className="contact-link">
  <FaEnvelope />
  your-email@example.com
</a>
```

## 📊 성능 최적화

### 이미지 최적화
이미지 파일이 큰 경우 최적화 권장:

```bash
# 이미지 압축 (ImageMagick 사용)
mogrify -quality 85 -resize 1920x public/asset/*.jpg
mogrify -quality 85 -resize 1920x public/asset/*.png
```

### 빌드 크기 분석

```bash
npm run build -- --mode analyze
```

## 🐛 문제 해결

### 이미지가 표시되지 않는 경우

1. 경로 확인: `/RLI/asset/1.jpg` (base URL 포함)
2. `public/asset/` 폴더에 이미지 존재 확인
3. `vite.config.js`의 `base: '/RLI/'` 확인

### 빌드 오류

```bash
# 캐시 삭제 후 재설치
rm -rf node_modules package-lock.json
npm install
npm run build
```

### gh-pages 배포 오류

```bash
# gh-pages 브랜치 삭제 후 재배포
git push origin --delete gh-pages
npm run deploy
```

### 개발 서버가 시작되지 않는 경우

```bash
# 포트 변경
npm run dev -- --port 3000
```

## 🔄 업데이트 방법

코드 수정 후 배포:

```bash
# 1. 변경사항 커밋
git add .
git commit -m "Update: 설명"
git push

# 2. 재배포
npm run deploy
```

## 📦 패키지 정보

### 주요 의존성
- **React 18.3**: UI 라이브러리
- **Framer Motion 11**: 애니메이션
- **React Icons 5**: 아이콘
- **Vite 5**: 빌드 도구
- **gh-pages 6**: GitHub Pages 배포

### 개발 도구
- ESLint: 코드 품질
- Prettier: 코드 포맷팅

## 🌟 고급 기능 추가 아이디어

### 1. 다크 모드

```jsx
// src/App.jsx에 추가
const [darkMode, setDarkMode] = useState(false)
```

### 2. 언어 전환 (한/영)

```jsx
// i18n 라이브러리 사용
npm install react-i18next i18next
```

### 3. Google Analytics

```jsx
// index.html에 추가
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

### 4. 비디오 추가

```jsx
// src/components/Demo.jsx 생성
<video controls>
  <source src="/RLI/asset/demo.mp4" type="video/mp4" />
</video>
```

## 💡 유용한 명령어

```bash
# 의존성 업데이트
npm update

# 보안 취약점 확인
npm audit

# 보안 취약점 수정
npm audit fix

# 프로젝트 정리
npm run clean  # (package.json에 스크립트 추가 필요)
```

## 📞 지원

문제가 발생하면:
1. GitHub Issues: https://github.com/ugiugi0823/RLI/issues
2. Email: your-email@example.com

## 🎉 완료!

축하합니다! React 버전의 논문 프로젝트 페이지가 완성되었습니다.

배포된 웹사이트: **https://ugiugi0823.github.io/RLI/**

