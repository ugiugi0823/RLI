# 빠른 시작 가이드 ⚡

## 🎯 목표

3단계로 GitHub Pages에 React 논문 페이지 배포하기!

## 📋 준비물

- Node.js (v16 이상)
- Git
- GitHub 계정

## 🚀 3단계 배포

### 1️⃣ 프로젝트 설정

```bash
cd "/Users/jhw/Downloads/[S2023] My_paper/2025/ICCVW 2025/RLI"

# 의존성 설치
npm install
```

### 2️⃣ 테스트 (선택사항)

```bash
# 로컬에서 확인
npm run dev
```

브라우저에서 http://localhost:5173 접속하여 확인

종료: `Ctrl + C`

### 3️⃣ 배포!

```bash
# GitHub에 코드 푸시
git init
git add .
git commit -m "Initial commit: React RLI project page"
git branch -M main
git remote add origin https://github.com/ugiugi0823/RLI.git
git push -u origin main

# GitHub Pages에 배포
npm run deploy
```

## ✅ 완료!

1-2분 후 다음 URL에서 확인:
**https://ugiugi0823.github.io/RLI/**

## ⚙️ GitHub Pages 설정 확인

1. https://github.com/ugiugi0823/RLI → **Settings** → **Pages**
2. Source가 `gh-pages` 브랜치로 설정되어 있는지 확인
3. 초록색 체크마크와 함께 URL이 표시되면 성공!

## 🛠️ 문제 해결

### "npm: command not found"

Node.js를 설치하세요:
```bash
# macOS (Homebrew)
brew install node

# 또는 공식 사이트에서 다운로드
# https://nodejs.org/
```

### "permission denied" 에러

```bash
sudo npm install
```

### 배포 후 404 에러

1. `vite.config.js`의 `base: '/RLI/'` 확인
2. 1-2분 대기 후 재시도
3. 브라우저 캐시 삭제 (Cmd+Shift+R)

### 이미지가 안 보임

```bash
# public 폴더에 asset이 있는지 확인
ls public/asset/

# 없다면 복사
cp -r asset public/
```

## ✏️ 커스터마이징

### 저자 정보 변경

`src/components/Header.jsx` 파일 수정:
```jsx
<span className="author">Your Name</span>
```

### BibTeX 변경

`src/components/Citation.jsx` 파일 수정:
```jsx
const bibtex = `@inproceedings{...}`
```

### 색상 테마 변경

`src/index.css` 파일 수정:
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
}
```

## 🔄 업데이트 방법

내용 수정 후:

```bash
git add .
git commit -m "Update content"
git push
npm run deploy
```

## 📚 더 자세한 가이드

- [DEPLOY_REACT.md](DEPLOY_REACT.md) - 상세한 배포 가이드
- [README.md](README.md) - 프로젝트 전체 설명

## 💡 팁

1. **로컬 테스트**: 배포 전 `npm run dev`로 꼭 확인
2. **빌드 테스트**: `npm run build && npm run preview`
3. **변경사항 확인**: Git으로 버전 관리하면 편리

## 🎉 성공!

이제 멋진 논문 웹사이트가 생겼습니다!

문제가 있다면 Issues에 등록해주세요:
https://github.com/ugiugi0823/RLI/issues

