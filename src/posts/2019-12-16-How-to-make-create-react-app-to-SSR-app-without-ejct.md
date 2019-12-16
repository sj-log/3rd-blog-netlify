---
category : Coding
---


# How to make Create-react-app to SSR app without eject

## Intro

It's wise choice to follow many thumbps approved guide by people. [The article](https://medium.com/bucharestjs/upgrading-a-create-react-app-project-to-a-ssr-code-splitting-setup-9da57df2040a) was like that. Almost 5000 claps the article took.

I've tried to fix SSE Issue. So Had a look on NextJs, and GatsbyJs. However, Those two react frameworks askes me another learning curves. They have their own grammar and way to configure. Honestly, I was tired about too many pain to have just a blog my own. So I didn't wish to throw all away of my last blog.

My last blog is made up of Netlify and Create-React-App. I've already fixed how to load the markdown frontmatters. However they were not fitting with any of GatsbyJs starter kit configuration. The starter kit asked me to change all of frontmatter reading process. That was way too much.

So I've tried to googling is there any other option I could solve my situation. then Tah da!

[Upgrading a create-react-app project to a SSR + code splitting setup](https://medium.com/bucharestjs/upgrading-a-create-react-app-project-to-a-ssr-code-splitting-setup-9da57df2040a)

above article makes it! simply changing my CRA(Create-React-App) is easily getting Server side rendering.

## Result

```
File sizes after gzip:

  159.28 KB (-1.08 KB)  build\static\js\2.1ff62527.chunk.js
  16.34 KB (-287 B)     build\static\js\main.bcbc68b1.chunk.js
  1.91 KB (+193 B)      build\static\css\main.d7c46389.chunk.css
  772 B (-3 B)          build\static\js\runtime-main.f2ebc575.js
```