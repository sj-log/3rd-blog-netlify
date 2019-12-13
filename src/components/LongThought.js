import React from 'react'
import * as matter from 'gray-matter';
import Disqus from 'disqus-react';
import {Helmet} from "react-helmet";


// remark-react libraries 3
import MarkdownReact from 'react-markdown';

class LongThought extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            props : props,
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
        // console.log(postTitle)
        const mdr = require(`../posts/${postTitle}.md`)
        // console.log(mdr)

        // markdown file to text then, put into state
        fetch(mdr).then((res) => res.text()).then(text => {
            var loadMd = matter(text)
            // console.log('loadMd', loadMd)
            var loadFrontmatter = loadMd.data
            // console.log('loadFrontmatter', loadFrontmatter)
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
        const {pathname, key} = this.props.location;
        const disqusShortname = 'ollagada';
        const disqusConfig = {
            url: this.props.location.url,
            identifier: this.props.location.key,
            title: this.state.frontmatter.title,
        };



        console.log(this.props)
        console.log(pathname, key)

        return (

            <div className='post-card'>
                {/* dynamical metatag excepts, thumbnail */}
                <Helmet>
                    <title>{frontmatter.title}</title>
                    <meta name="description" content={md} />
                    <meta name="og:image" content={frontmatter.thumbnail} />
                </Helmet>
                <header>
                    <h1>{frontmatter.title}</h1>
                    <span>{frontmatter.date}</span>
                </header>
                <MarkdownReact source={md} escapeHtml={false}></MarkdownReact>

                <footer>
                    <hr className="divider"></hr>
                <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
                </footer>

            </div>

        )
}

}

export default LongThought;
