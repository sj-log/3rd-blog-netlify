사이트맵이 제대로 설정되지 않아
Index.js 첫번째 줄에 폴리필을 넣어봤다.
그래도 안된다. 단 두개의 사이트맵만 설정될 뿐.
Promise에서 :title로 생성하도록 만든 Url은 사이트 제네레이터가 잡아내지 못했다.

![리액트에서 단두개만 사이트맵형성됨](https://user-images.githubusercontent.com/35059428/70787160-77975c00-1dd1-11ea-90a9-b767a6b292ee.png)

그래서 어떻게해야하나 찾아보다, React-sitemap-generator라는 라이브러리를 발견했다.
