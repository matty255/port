## special thanks to https://github.com/safak/youtube/tree/react-portfolio/
## 원본 코드 https://codesandbox.io/s/portfolio-xslmy

## 라이브데모 https://matty255.github.io/port/

<h1 align="center"> Front-End Developer Portfolio </h1> 
<h3 align="center"> A clean, beautiful, responsive, and 100% customizable portfolio <br /> template for Front-End Developers! </h3>


<h1 align="center"> 주니어 프론트엔드 개발자를 위한 포트폴리오 </h1> 
<h3 align="center"> 반응형 웹 지원, 커스텀 가능, 멋진 인터랙션이 있는 <br /> 프론트엔드 개발자를 위한 템플릿! </h3>

----

사용법(6/29~ 아직 제작중)

0. 제작자에게 스타를 준다.
1. 클론하거나 포크한다.
2. npm run i
3. static/data 안의 json파일을 각자의 정보에 맞게 수정한다.
4. npm start
5. 커밋을 올린다.
6. settings에 들어가 page > main에 놓고 save
7. save하면 나오는 깃페이지 주소를 복사한다.
8. package.json 안의 homepage를 이 주소로 바꿔준다.
9. npm run deploy
10. 다시 settings에 들어가 page > gh-page로 브랜치를 변경해준다.
    - action이 실패하면 rerun하기
    
완성되면 우측 하단에 깃페이지 Environments가 활성화되고 포트폴리오를 볼 수 있다!

----

## 사용 라이브러리
- node-sass
- tailwindCSS
- typed.js
- tw-elements

## 주요 기능(구현중)
- 바닐라 css로 전면 버티컬 슬라이드 구현
- 바닐라 css로 background modal 구현
- 다양한 포맷의 autoplay video 캐러셀
- 데이터파일 분리로 커스터마이징을 쉽게
- theme, dark, language 정보를 context로 전역관리
- 내 계정으로 email 받기
