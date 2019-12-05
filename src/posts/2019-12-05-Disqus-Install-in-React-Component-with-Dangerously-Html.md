---
category : Coding
---

## How to install Discus comments in ReactJs app.

I've struggled with a putting Disqus script in a component.

Using [a npm library](https://yarnpkg.com/en/package/disqus-react#readme) is the spot on to make it done.

1. type in terminal `yarn add disqus-react` or `npm install disqus-react`. used `yarn` for myself.

2. follow the basic usage below
```js
import React from 'react';
import Disqus from 'disqus-react';
// Alternatively, import specific members:
// import { DiscussionEmbed, CommentCount, CommentEmbed } from 'disqus-react';

class Article extends React.Component {
    render() {
        const disqusShortname = 'example';
        const disqusConfig = {
            url: this.props.article.url,
            identifier: this.props.article.id,
            title: this.props.article.title,
        };

        return (
            <div className="article">
                <h1>{this.props.article.title}</h1>
                <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
                    Comments
                </Disqus.CommentCount>

                <p>{this.props.article.body}</p>

                <Disqus.CommentEmbed 
                    commentId={this.props.article.featuredComment}
                    showMedia={true}
                    height={160}
                />

                <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            </div>
        );
    }
}
```


3. removed below, as I don't need them.

```
 <Disqus.CommentEmbed 
                    commentId={this.props.article.featuredComment}
                    showMedia={true}
                    height={160}
                />
```
4. Complete!
5. 
![image](https://user-images.githubusercontent.com/35059428/70211511-a3369880-1778-11ea-8380-b8d59b10e835.png)

