---
category : Coding
tags : [Promise, Javascript, Await, Async, Response, ReactJs, Markdown, Blog]
thumbnail : https://images.unsplash.com/photo-1533009818448-9da32131ba79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80
---

![map-promise-setState-without-rerendering](https://user-images.githubusercontent.com/35059428/66505157-57ab9980-eafd-11e9-9932-7354f74f71b0.png "finally distracted markdownfile in mapping without any re-rendering")


## Async와 Await이 필요했다.
[Promise 오브젝트에서 값을 얻어내기 위해선,](https://stackoverflow.com/questions/53432908/get-value-of-resolved-promise-in-sync)

Resolved 되었지만, 꽁꽁 숨어있던 PromiseValue를 얻어내는 길은 바로 이 둘.

내일은 이 두개가 뭔지 공부해야할 필요가 있겠다.

진짜 안타까운게, 
## 왜 Promise 설명파트(Mozilla 공식홈페이지)에는 Await과 Async로 풀어낼 수 있다는 답을 어디에도 적지 않은 이유는 무얼까..
Promise가 Resolve 되려면, 시간차가 필요한듯. 이를 위해선 위 Await와 Async가 필요해보인다.

그런데 [Await에 관한 설명 페이지](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)에서는 너무나 간단하게 나타나있다...
마치 3일이나 시간을 써가며 이렇게도 해보고 저렇게도 해본 모든 손놀림들을 무기력하게말이지....

그리고 웃긴건, 
`then()`으로 `Promise Object`를 내뱉는 모든 함수마다 `await`를 넣어줘야했다. 

## Await

> The await operator is used to wait for a Promise. It can only be used inside an async function.

> Await 는 프로미스를 기다리기위해 사용됩니다. Async 함수 내에서만 사용할 수 있습니다.


## [그리고 Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

> An async function can contain an await expression that pauses the execution of the async function and waits for the passed Promise's resolution

> Async 함수는 Await 표현식 하나를 갖고 있을 수 있습니다. 이 Await 표현식은 async함수의 실행을 멈춥니다. 그리고 Promise가 resolved되어 나타날 때까지 기다려줍니다. 


## 만들어놓은 코드를 다시 한번 살펴봤다.
이 코드는 MarkdownFile들을 포스팅 리스트로 나타내고자 만든 코드.

```js
 
    async componentDidMount() {

        // shallow state.posts

        await markdownFiles.map(async (md, i) => {
            var distracting = await fetch(md).then(async (res) => {

                var url = decodeURI(res.url)
                var ns = url.substring(url.lastIndexOf('/') + 1)
                var hn = ns.split(".")[0];
                var dehypen = hn.replace(/-/gi, ' ')
                var title = dehypen.substring(11)

                var fr = await res
                    .text()
                    .then((r) => {
                        return r
                    })

                var distract = matter(fr)

                var parcel = {
                    distract,
                    title
                }
                console.log(parcel)
                return parcel

            })
            console.log(distracting)
        })
    }
```

처음에는 `this.state.elements.slice()`를 해서 `shallow`된 `state`값을 쓰네 마네...부터
`concate()`, `push()` 두 함수로 바꿔 끼워가며 this state 정돈하려 했다.
왜냐하면 자꾸 **re-render 현상**이 일어나, 브라우저 상에서 버벅버벅이 일어났기때문(profiler에서도 잡히던 그 모습).

`this.setState()`를 `map()` 함수 안에서 어거지로 썼더니
## 수백 수천개의 rendering이 반복됐다.
그 때문에 보낸 3일의 시간... 아....
진짜 너무 피곤하다..

아으..
## 시간을 한참 보냈네..

코딩을 한다는 건
이렇게 무기력하게 흘려보낼 수 밖에 없는 시간들을
최대한 줄이고,

스피디하게 내가 원하는 바를
원하는 대로 구성하도록
만드는 실력이 필요한데..

이렇게 스크립트를 일일이
찾아내고...
번거롭게 알아내고..
설명문을 읽어내고..
해석을 찾아내고..
하는 그 모든 일들이
## 시간도 많이 잡아먹고 쉽지않다.
건축을 짓는 것처럼
하나의 프로그램을 짓는다는게 말처럼 쉽지가 않다.

누군가는 손가락 좀 놀리면
돈이 벌린다 믿을지 모르지만..
이건 완전 다른 이야기
몸을 빌어 막노동을 하는 것보다 더 쉽지 않다..
눈에 보이지 않는 것을
일일이 배워가며
어떻게 해나가야할지 힌트를 잡고
어림잡아가면서
그 나마 주어진 정보들을 토대로
또 빚고 또 빚어내야하는 일 

## 그래도 재밌다. 결국 3일을 고생했으나 또 해냈지않은가

아!
크아!