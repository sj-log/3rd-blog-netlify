---
category : Coding
---


# Netlify에서 Create-React-App으로 만든 리엑트가 Refresh나 Url을 Manually wrote 했을 때 접근이 불가능한 경우

## 벼래별 해결책을 만났었다.
처음에는 무슨 이유에서 이렇게 URL 접근이 불가능한건지 알 수 없었다.
검색하면서 조금 짐작하게 된 건, Server side rendering이냐 Client side rendering이냐에 따라 Url로 접근이 가능하냐 불가능하냐가 결정되는 듯.
그리고 React를 돌리는 Server가 무엇이냐(Tomcat, Express, Node 등)에 따라 해결책이 다른 듯.
[900여개 이상 좋아요를 받은 한 Stackoverflow에서는 Isomorphic으로 구동하는 방식을 추천했다.](https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually)
하지만 내가 여태 짜놓은 블로그를 새로운 킷으로, 그것도 낯선 서버를 이용해 만든다는건 불가능해보였다.
그래서 계속 찾아봤다.

[Netlify로 배포한 경우에는 단 한줄로 이같은 문제를 해결할 수 있다는 글](https://sung.codes/blog/2018/12/18/page-not-found-on-netlify-with-react-router/)을 찾았다.

## 방법은 간단했다.
public 폴더 안에 `_redirects`라는 확장자도 없는 파일 하나를 만든다.
그 안에 밑의 한줄을 넣는다. 
```
/*    /index.html   200
```
다시 배포한 뒤 결과를 확인해봤다.
그랬더니 이리저리 시도해보느라 3시간을 날린게 허무할 정도로,
쉽게 해결됐다.

## 시간을 너무 버렸다.
구글 상단에 최상단에 있는 검색결과를 일단 누르고 보는게 아니다.
빠르게 찾으려면, 내 상황과 가장 밀접한 연관을 갖는 제목을 먼저 클릭해들어가야했다.
그냥 React App이 refresh 어쩌고 해도 page not found가 아니라
Netlify 에서 React app이 page not found가 뜨는 경우처럼 조금 더 밀접한 연관이 있는 제목을 먼저 찾아들어가야겠다.

## 여전히 react-router-sitemap을 작동시켜도, 수 많은 마크다운 포스트들이 잡히진 않는 듯하다.

Google에서 어떻게 블로그 포스팅들이 다 잡히도록 만들 수 있을지가 과제로 남았다.
