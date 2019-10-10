import React from 'react'
import {Link} from 'react-router-dom'
import * as matter from 'gray-matter';

const importAll = (r) => r
    .keys()
    .map(r);

const markdownFiles = importAll(require.context('../posts', false, /\.md$/))
    .sort()
    .reverse();

export default class LongThoughts extends React.Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }

    }

    componentDidMount() {
        // shallow state.posts
        var shallowPosts
        markdownFiles.map(async (md, i) => {
            var distracting = await fetch(md).then(async (res) => {

                var url = decodeURI(res.url)
                var ns = url.substring(url.lastIndexOf('/') + 1)
                var hn = ns.split(".")[0];
                var dehypen = hn.replace(/-/gi, ' ')
                var title = dehypen.substring(11)
                var path = hn
                var fr = await res
                    .text()
                    .then((r) => {
                        return r
                    })

                var frontmatter = matter(fr).data

                var parcel = {
                    frontmatter,
                    title,
                    path
                }
                // console.log(parcel)
                return parcel

            })

            shallowPosts = this
                .state
                .posts
                .slice();
            shallowPosts.push(distracting)
            this.setState({posts: shallowPosts})
        })

    }

    shouldComponentUpdate(nextProps, nextState) {

        // how to prevent rerender until whole amount posts get loaded?
        //  then only updated(rerendering) when the post loading is done? length of post??
        // wow.. this is working!!! I could stop the re-rendering! then,  I can make that opposite?? :D

        var loaded = this.state.posts.length
        var postCounts = markdownFiles.length
        console.log(loaded, postCounts)

        if (this.state.posts.length!==markdownFiles.length-1) { 
            return false
        } else {
            return true
        }
    }

    render() {
        console.log('call the whole state', this.state.posts)

        const {posts} = this.state
        return (
            <div className="posts-container">
                {
                    posts.map(
                        (post, i) => <Link
                            to={this.props.match.url + '/' + post
                                .path
                                .replace(/ /gi, "-")}
                            key={i}>
                            <div
                                style={{
                                    backgroundImage: "url(" + post.frontmatter.thumbnail + ")"
                                }}>{post.title}</div>
                        </Link>
                    )
                }
            </div>
        )
    }
}
