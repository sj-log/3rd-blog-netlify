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
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            posts: [],
            categories: []
        }

    }

    componentDidMount() {
        // distracting markdown information

        markdownFiles.map(async (md, i) => {
            var distracting = await fetch(md).then(async (res) => {
                // var loadingProgress = i / markdownFiles.length * 100
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

            // make a shallow chunk of posts
            var shallowPosts = this
                .state
                .posts
                .slice();

            shallowPosts.push(distracting)

            // making categories
            var uniq = new Set()

            shallowPosts.map((post, i) => {
                var el = post.frontmatter.category

                switch (typeof el) {
                    case 'object':
                        el.map((e) => {
                            uniq.add(e)
                        })
                        break

                    case 'string':
                        uniq.add(el)
                        break
                }

            })

            var setToArray = Array.from(uniq)

            // Need to be fixed, loading:false setState once, when last markdown file mapped
            // done !just sending the false of loading in mapping put distracted markdown
            // title/frontmatter into shallow this.state.posts

            this.setState({posts: shallowPosts, loading: false, categories: setToArray})

        })

        // categoryMaker(this.state.posts)

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
        const {posts, loading, categories} = this.state
        const props = this
            .props
     

        if (loading) {
            return <RenderingIcon></RenderingIcon>
        } else {
            return (
                <div className="posts-container">
                    <aside className="categories">
                        {
                            categories.map(
                                (category, i) => <Link to={'categorized/' + category}>
                                    <h4 className="category" key={i}>{category}</h4>
                                </Link>
                            )
                        }
                    </aside>

                    <article className="posts">
                        {
                      
                            posts.map((post, i) => {
                                if (post.frontmatter.status == 'draft') {
                                    return console.log('draft md file')
                                } else {
                                    return <Link
                                        to={props.match.url + '/' + post
                                            .path
                                            .replace(/ /gi, "-")}>

                                        <div className='post-link-frame'>
                                            <h3 className='numbering'>{i}</h3>
                                            <img src={post.frontmatter.thumbnail}></img>
                                            <h4 className='post-title'>{post.title}</h4>
                                        </div>
                                    </Link>
                                }
                            })
                        }</article>

                </div>

            )
        }

    }
}