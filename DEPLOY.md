# GitHub Pages 배포 가이드

## 🚀 배포 방법

### 1. GitHub 저장소에 코드 푸시

```bash
cd "/Users/jhw/Downloads/[S2023] My_paper/2025/ICCVW 2025/RLI"

# Git 초기화 (처음인 경우)
git init
git add .
git commit -m "Initial commit: Add RLI project page"

# 원격 저장소 연결
git branch -M main
git remote add origin https://github.com/ugiugi0823/RLI.git
git push -u origin main
```

### 2. GitHub Pages 활성화

1. GitHub 저장소 페이지로 이동: https://github.com/ugiugi0823/RLI
2. **Settings** 탭 클릭
3. 왼쪽 메뉴에서 **Pages** 클릭
4. **Source** 섹션에서:
   - Branch: `main` 선택
   - Folder: `/ (root)` 선택
5. **Save** 버튼 클릭

### 3. 배포 확인

약 1-2분 후, 다음 URL에서 웹사이트 확인:
**https://ugiugi0823.github.io/RLI/**

## 📁 파일 구조

```
RLI/
├── index.html          # 메인 웹페이지
├── style.css           # 스타일시트
├── README.md           # GitHub 저장소 설명
├── .nojekyll          # Jekyll 비활성화
├── requirements.txt    # Python 패키지
├── .gitignore         # Git 제외 파일
└── asset/             # 이미지 폴더
    ├── 1.jpg
    ├── 2.jpg
    ├── 3.jpg
    └── 4.png
```

## ✏️ 수정이 필요한 부분

`index.html` 파일에서 다음 정보들을 실제 내용으로 수정하세요:

1. **저자 정보** (라인 17-21):
```html
<div class="authors">
    <span class="author">Your Name</span><sup>1</sup>
</div>

<div class="affiliations">
    <sup>1</sup>Your Institution
</div>
```

2. **Paper 링크** (라인 24):
```html
<a href="#" class="btn btn-paper">📄 Paper</a>
```
실제 논문 PDF 링크로 변경

3. **BibTeX** (라인 167-172):
```bibtex
@inproceedings{rli2025,
  title={RLI: Residual Learning in Inversion for Image Editing},
  author={Your Name},  # 실제 저자 이름
  booktitle={ICCV Workshop},
  year={2025}
}
```

4. **Acknowledgements** (라인 180):
실제 지원 기관/연구비 정보 추가

5. **Contact** (라인 192):
```html
<a href="mailto:your-email@example.com">your-email@example.com</a>
```
실제 이메일 주소로 변경

## 🎨 웹사이트 특징

### ✨ 디자인
- 현대적이고 깔끔한 그라디언트 헤더
- 반응형 디자인 (모바일/태블릿/데스크톱 대응)
- 부드러운 애니메이션 효과
- 섹션별 명확한 구분

### 📱 반응형
- 데스크톱: 최대 1200px 너비
- 태블릿: 768px 이하 최적화
- 모바일: 480px 이하 최적화

### 🔗 섹션 구성
1. **Header**: 제목, 저자, 링크
2. **Abstract**: 연구 요약
3. **Main Results**: 주요 결과 (1.jpg)
4. **Method**: 방법론 설명 (2.jpg)
5. **Qualitative Results**: 정성적 결과 (3.jpg)
6. **Quantitative Results**: 정량적 결과 (4.png)
7. **Citation**: BibTeX
8. **Acknowledgements**: 감사 인사

## 🔄 업데이트 방법

웹사이트 내용을 수정한 후:

```bash
git add .
git commit -m "Update: 설명"
git push
```

약 1-2분 후 웹사이트에 변경사항이 반영됩니다.

## 🐛 문제 해결

### 웹사이트가 표시되지 않는 경우
1. GitHub Pages 설정 확인
2. 브라우저 캐시 삭제 (Ctrl+Shift+R / Cmd+Shift+R)
3. 1-2분 대기 후 재시도

### 이미지가 표시되지 않는 경우
- `asset/` 폴더 경로 확인
- 이미지 파일명 대소문자 확인
- `.gitignore`에서 이미지 제외되지 않았는지 확인

### CSS가 적용되지 않는 경우
- `style.css` 파일이 `index.html`과 같은 폴더에 있는지 확인
- 브라우저 캐시 삭제

## 💡 추가 개선 아이디어

1. **비디오 추가**: 데모 비디오가 있다면 YouTube 임베드
2. **인터랙티브 비교**: 슬라이더로 before/after 비교
3. **다크 모드**: 다크 모드 토글 버튼 추가
4. **Google Analytics**: 방문자 통계 추적
5. **소셜 미디어 메타태그**: 공유 시 미리보기 설정

## 📞 도움이 필요하신가요?

- GitHub Issues: https://github.com/ugiugi0823/RLI/issues
- Email: your-email@example.com

