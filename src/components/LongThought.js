import React from 'react'
import Disqus from 'disqus-react';
import * as matter from 'gray-matter';

// remark-react libraries 3
import MarkdownReact from 'react-markdown';

class LongThought extends React.Component {
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
    }

    componentDidMount() {
        var postTitle = this.state.title;
        console.log(postTitle)
        const mdr = require(`../posts/${postTitle}.md`)
        console.log(mdr)

        // markdown file to text then, put into state
        fetch(mdr)
            .then((res) => res.text())
            .then(text => {
                var loadMd = matter(text)
                console.log('loadMd', loadMd)
                var loadFrontmatter = loadMd
                    .data
                    console
                    .log('loadFrontmatter', loadFrontmatter)
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

    }

    render() {
        const {md, frontmatter} = this.state;
        console.log(this.props)
        console.log(this.state.frontmatter)
        // disqus init
        const disqusShortname = 'ollagada';
        const disqusConfig = {
            url: this.props.match.url,
            identifier: this.props.location.id,
            title: this.props.match.title
        };

   
        return (
            
            <div className='post-card'>
                <header>
                    <h1>{frontmatter.title}</h1>
                    {/* <span className="badge pink">{frontmatter.category}</span> */}
                    {/* <date>{frontmatter.date}</date> */}
                </header>
                <MarkdownReact source={md}></MarkdownReact>
                <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
                </Disqus.CommentCount>
                <Disqus.CommentEmbed
                    commentId={this.props.location.id}
                    showMedia={true}
                    height={160}
                />

                <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            </div>
        )
    }

}

export default LongThought;
