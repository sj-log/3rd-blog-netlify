---
category : Coding
---


## 사이트맵이 제대로 설정되지 않았다.
Index.js 첫번째 줄에 폴리필을 넣어봤다.
그래도 안된다. 단 두개의 사이트맵만 설정될 뿐.
폴리필과는 상관이 없나보다. 소용이 없다.

React-router-sitemap을 받아 설치해보았다.

`yarn add react-router-sitemap` 으로 패키지 설치.

그 후 src 폴더 밑에 sitemap이라는 폴더를 만들어
다음과 같이 코드를 짜줬다. sitemap을 실질적으로 생성하는 파일.

```js
require("babel-register")({
    presets: ["es2015", "react"]
  });
   
  require.extensions['.scss'] = function () {
    return null;
  };
  
  require.extensions['.png'] = function () {
    return null;
  };
  
  require.extensions['.svg'] = function () {
    return null;
  };
  
  require.extensions['.jpg'] = function () {
    return null;
  };


  const router = require("./sitemap-routes").default;
  const Sitemap = require("react-router-sitemap").default;
  
  function generateSitemap() {
      return (
        new Sitemap(router)
            .build("https://sj-log.netlify.com")
            .save("./public/sitemap.xml")
      );
  }
  
  generateSitemap();
```

그리고 같은 폴더 `sitemap` 안에 `sitemap-routes.js`라는 파일을 만들어주었다. 코드는 다음과 같다.

```js
import React from 'react';
import { Route } from 'react-router';


import Intro from '../components/Intro';
 
export default (
    <Route>
            <Route exact={true} path="/">
                            <Intro></Intro>
                        </Route>
                        <Route
                            path="/log"></Route>

                        <Route path="/:title" render={props => <LongThought {...props}/>}></Route>

    </Route>
);
```

그리고 이를 실행할 수 있는 스크립트가 필요하다.
package.json에 다음과 같은 코드를 적어준다.
```json
 "scripts": 
 { 
    ...
    "sitemap": "babel-node src/sitemap/sitemap-generator.js","predeploy": "npm run sitemap"
    ... 
 }
```
그 뒤 `npm run sitemap`을 terminal에 쳐보자.
public 폴더 안에 `sitemap.xml`이 생겼음을 확인할 수 있다.

## 이게 완벽한 해결책인 것 같지는 않다.
왜냐하면, 마크다운 파일들로 만들어낸 루트들은 전혀 맵핑해내질 못하고 있다. 이 부분은 다음에 추가적으로 수정해나가야할 상황인 듯.
하지만 현재 `sitemap.xml`을 만들어낼 수는 있어서 그럭저럭 쓰는 상황.