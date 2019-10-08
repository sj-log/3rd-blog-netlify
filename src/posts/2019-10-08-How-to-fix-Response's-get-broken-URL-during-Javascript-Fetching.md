---
category : Coding
tags : [ReactJs, Javascript, Encoding, Decoding, UTF8]
thumbnail : https://images.unsplash.com/photo-1541454740624-5733e140260f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1007&q=80
---


# How to fix Response's get broken URL during Javascript Fetching.
## Situation

Wanted to all my markdown files get fetched by `map` function.

```js
markdownFiles.map((md) => {
            fetch(md).then((res)=>
                // for getting the titles > substrings > 
                {   console.log('res',res)
                    // response > response.url to substring

                    var mdUrl = decodeURI(res.url)
                
                    var ns = mdUrl.substring(mdUrl.lastIndexOf('/') + 1)
                    var hn = ns.split(".")[0];
                    var dehypen = hn.replace(/-/gi, ' ')
                    var title = dehypen.substring(11)
```
but the result was like this. 

![response-url-encoding-broken-in-non-english](https://user-images.githubusercontent.com/35059428/66388307-60ff0e00-e9f8-11e9-8c1c-0ec92ef46e89.png)

Wanted make them as a post title.
but I cannot make that broken url put on the view.

## Solution

[`decodeURI()` function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI) was the key.

just I'd wrapped the `res.url` part by `decodeURI(res.url)`


## Result

![response-url-decoding-fixed-in-proper-words](https://user-images.githubusercontent.com/35059428/66388599-0f0ab800-e9f9-11e9-967d-94d3f0c4c4df.png)
