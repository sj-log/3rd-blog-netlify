---
category : Coding
---
How to embedding a youtube video in React-Markdown?

just add an attribute `escapeHtml={false}`,

then Youtube video will come out.

![result-input-youtube-embedded-video-into-markdown-react](https://user-images.githubusercontent.com/35059428/70323368-f17a9300-186f-11ea-97f6-af52779b494b.png)

```js
const ReactMarkdown = require('react-markdown')
const htmlParser = require('react-markdown/plugins/html-parser')

// See https://github.com/aknuds1/html-to-react#with-custom-processing-instructions
// for more info on the processing instructions
const parseHtml = htmlParser({
  isValidNode: node => node.type !== 'script',
  processingInstructions: [/* ... */]
})

<ReactMarkdown
  source={markdown}
  escapeHtml={false}
  astPlugins={[parseHtml]}
/>
```



[for more options](https://github.com/rexxars/react-markdown)