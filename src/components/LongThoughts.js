import React from 'react'
import {Link} from 'react-router-dom'
import * as matter from 'gray-matter';
import RenderingIcon from './RenderingIcon'

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
            loading: true,
            posts: []
        }

    }

    componentDidMount() {
        // shallow state.posts

        markdownFiles.map(async (md, i) => {
            var distracting = await fetch(md).then(async (res) => {
                var loadingProgress = i / markdownFiles.length * 100
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

                return parcel

            })

            var shallowPosts = this
                .state
                .posts
                .slice();
            shallowPosts.push(distracting)
            // Need to be fixed, loading:false setState once, when last markdown file mapped
            // done !just sending the false of loading in mapping
            this.setState({posts: shallowPosts, loading: false})

        })

    }

    shouldComponentUpdate(nextProps, nextState) {

        // how to prevent rerender until whole amount posts get loaded?  then only
        // updated(rerendering) when the post loading is done? length of post?? wow..
        // this is working!!! I could stop the re-rendering! then,  I can make that
        // opposite?? :D

        var loaded = this.state.posts.length
        var postCounts = markdownFiles
            .length
            console
            .log(loaded, postCounts)
        var loadingStatus = this.state.loading

        if (this.state.posts.length !== markdownFiles.length - 1) {

            // console.log('still loading') console.log('loading', loadingStatus)
            return false
        } else {
            // console.log('loading complete!') console.log('loading', loadingStatus)
            return true
        }
    }

    render() {
        const {posts, loading} = this.state
        console.log('print out posts',posts)
        
        // loading condition proc
        if (loading) {
            return <RenderingIcon></RenderingIcon>
        } else {
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
                                    className='post-link-frame'
                                    // style={{
                                    //     backgroundImage: "url(" + post.frontmatter.thumbnail + ")"
                                    // }}
                                    >
                                        <img src={ post.frontmatter.thumbnail}></img>
                                    <h4>{post.title}</h4>
                                </div>
                            </Link>

                        )
                    }
                </div>

            )
        }

    }
}