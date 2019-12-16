---
category : Coding
status : draft
---

ReactJs로 만든 블로그가 Google Search Console에 인식되지 않는 주관적인 이유

## 문제

Google과 네이버에서 모두 Indexing될 수 있도록 찾아봤다.
Google analytics는 React-ga 라는 모듈로 Verification에 성공할 수 있었지만, 막상 Google Search console과 Naver webmaster tool에서는 태그를 달거나 제공해주는 html을 root폴더에 넣고 푸시해도 인식하지 못했다.

이틀정도 꼬박 Stackoverflow와 구글링으로 그 방법들을 찾아내려했었다.
[그러다 알게 된 한 구원 같은 답변]( https://stackoverflow.com/questions/39053511/how-to-optimize-seo-for-spa-using-react-helmet)

## 문제 원인

요약하자면 
`ReactJs는 Static Html파일을 만들어내는 구조가 아니라
Server side에서 Rendering 되는 구조다.`
그렇기에 Google 이든 Naver든 Crawler가 다가와 meta tag를 인식하지 못했던 것.

해결법으로는 [React-Snapshot을 설치해주면 간단히 가능](https://www.npmjs.com/package/react-snapshot).

## 설치방법


1. `$ yarn add react-snapshot`

2. package.json 에서 build 부분을 수정

```json
"build": "react-scripts build && react-snapshot"
``` 

3. index.js부분을 React Dom 대신 react-snapshot의 render를 불러온다.

```js
import { render } from 'react-snapshot';
render(<App/>, document.getElementById('root'));
```

## 원리

결과적으로 Serverside Rendering을 구사하지만
가상의 브라우저에 띄우며 렌더링된 HTML을 Snapshot, 순간적으로 찍어내는 원리라고..
그리고 렌더링된 html과 연결되어있는 모든 URL를 크롤링 한단다.

## 후기

![google-search-console-react-succeeded](https://user-images.githubusercontent.com/35059428/70407922-97edb080-1a89-11ea-9308-0087b6903b97.png "search console에 성공시켰다.")

하지만 여전히 문제를 보이는 건, Sitemap이 markdown 파일들로 만들어낸 포스트들을 여전히 찾아내지 못하는 점...
이 부분은 또 해결 해나가야 할 부분이다.