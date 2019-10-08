---
category : Coding
tags : [ gray-matter, frontmatter, markdown, reactjs, javascript, yarn, npm]
---

Move out from gitpage jekyll to netlify reactjs blog
how to distract only front-matter part from my markdown files.

There was many npm libraires.
but only one worked.
`gray-matter`
was only working for the frontmatter dealing.

that parsing through YAML to string file.

you just need, 

## Constructor() part

```js
   constructor(props) {
        super(props)
        this.state = {
            md: null,
            title: props.match.params.title,
            frontmatter: {
                layout: null,
                thumbnail: null,
                title: null,
                category: null,
                date: null,
                comments: null

            }
        }
```

Initially, you need set as the bracket like that.
The brackets will be the place for fetched markdown data.

## ComponentDidMount() part
```js
 var postTitle = this.state.title;
        const mdr = require(`../posts/${postTitle}.md`)
        const {md, frontmatter} = this.state;
 
   fetch(mdr)
            .then((res) => res.text())
            .then(text => {
                var loadMd = matter(text)
        
                var loadFrontmatter = loadMd
                    .data
             
          
                this.setState({
                    md: loadMd.content,
                    frontmatter: {
                        layout: loadFrontmatter.layout,
                        category: loadFrontmatter.category,
                        date: loadFrontmatter.date,
                        thumbnail: loadFrontmatter.thumbnail,
                        title: loadFrontmatter.title,
                        comments: loadFrontmatter.comments
                    }
                })
            })
```
`this.state.title` the props, already received this post's data from post list, through url. That becomes the key for identify specific post, through below variable.

```js
const mdr = require(`../posts/${postTitle}.md`)
```

then by `fetching` with `then` functions, the retrieved md file which is `Promise` object, destracts the string data from markdown file.
Then we can save the markdown components(frontmatter and body).

when the fetched data by `gray-matter`, is like this

![gray-matter-result](https://user-images.githubusercontent.com/35059428/66375219-7156bf00-e9df-11e9-9860-1c6882a19e74.png)

then you can see the returned object.
`content` is the whole markdown file data without frontmatter.
`data` is the frontmatter part.
##  You can distract `data` to capture the front matter info. 

## Render() part

```
 render() {
       
       
        return (
            <div className='post-card'>
                <header>
                    <h1>{frontmatter.title}</h1>
          
                </header>
                    <MarkdownReact source={md}></MarkdownReact>
                }
            </div>
        )
    }

```