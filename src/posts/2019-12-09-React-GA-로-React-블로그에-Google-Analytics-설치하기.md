---
category : Coding
---

## React App에 Google Analytics 설치하기

## `<head>` 태그에 넣는걸로는 안되더라
`head` 태그 사이에 넣는 방식으로 `<script />`에, 아날리틱스 verification 코드만 넣으면 되는 줄 알았 것 만...
전혀 작동되지 않았다.
그 덕에 Google Search Console도 인식시킬 수 없었다.

## React-GA 발견
좀 답답해하고 있던 찰나... [어떻게 해야되나 검색을 하다 React-GA 모듈을 설치해쓰면 된다는 말](https://levelup.gitconnected.com/using-google-analytics-with-react-3d98d709399b)에 설치를 시작.

`yarn add react-ga --save`를 쳐준 뒤

<script src="https://gist.github.com/sj-log/2318b3ae3945e1e76c33231857cca9ec.js"></script>


![google-ga-succeeded](https://user-images.githubusercontent.com/35059428/70388789-b86e2a00-19f9-11ea-9b42-e051816923ab.png)

## React로 개발할 때는 npm이나 Yarn에서 모듈부터 찾아야지

React에서의 모든 앱은 결국 Npm 이나 Yarn에서 원하는 기능을 먼저 찾아 설치부터 해주는게
가장 빠른 방식이라는걸 알게 된 듯.
어떤 기능이나 라이브러리든 설치하고 싶다면 Yarn이나 Npm에 유사 패키지가 있는지 먼저 살펴봐야겠다.

