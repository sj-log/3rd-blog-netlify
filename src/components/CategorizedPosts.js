import React from 'react';
import {Link, Route} from 'react-router-dom'
import * as matter from 'gray-matter';
import RenderingIcon from './RenderingIcon'

const importAll = (r) => r
    .keys()
    .map(r);

const markdownFiles = importAll(require.context('../posts', false, /\.md$/))
    .sort()
    .reverse();
   

export default class CategorizedPosts extends React.Component {
    constructor(props) {
        super(props)

        console.log(props)

        this.state = {

            loading: true,
            posts: [],
            categories: []

        }
    }

    shouldComponentUpdate(nextProps, nextState) {

        // how to prevent rerender until whole amount posts get loaded?  then only
        // updated(rerendering) when the post loading is done? length of post?? wow..
        // this is working!!! I could stop the re-rendering! then,  I can make that
        // opposite?? :D

        var loaded = this.state.posts.length
        var postCounts = markdownFiles.length
        // console .log(loaded, postCounts)
        var loadingStatus = this.state.loading

        if (this.state.posts.length !== markdownFiles.length - 1) {

            // console.log('still loading') console.log('loading', loadingStatus)
            return false
        } else {
            // console.log('loading complete!') console.log('loading', loadingStatus)
            return true
        }
    }

    async componentDidMount() {
        const props = this.props

        var propCategory = props
            .match
            .params
            .category
            console
            .log(propCategory)

        await markdownFiles.map(async (md, i) => {

            var distracting = await fetch(md).then(async (res) => {

                var fr = await res
                    .text()
                    .then((r) => {
                        return r
                    })

                var frontmatter = matter(fr)
                    .data
                    console
                    .log('frontmatter', frontmatter)
                    
                // filtering common category in its tags or category
                if (frontmatter.category === propCategory || (frontmatter.category != undefined && frontmatter.category.includes(propCategory))) {

                    // if yes, post proc executed
                    var url = decodeURI(res.url)
                    var ns = url.substring(url.lastIndexOf('/') + 1)
                    var hn = ns.split(".")[0];
                    var dehypen = hn.replace(/-/gi, ' ')

                    var title = dehypen.substring(11)
                    var path = hn

                    // Frontmatter insert
                    var parcel = {
                        frontmatter,
                        title,
                        path
                    }

                    return parcel
                } else {

                    var parcel = {
                        frontmatter
                    }

                    console.log('parcel', parcel) // return whole categories just
                    return parcel
                }

            })

            // state copies - formally recommended
            var shallowPosts = this
                .state
                .posts
                .slice();

            // null or categorized posts
            shallowPosts.push(distracting)

            // add into Set file
            var uniq = new Set()

            shallowPosts.map((post, i) => {
                if (post != null) {
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
                } else {
                    return false
                }
            })
            console.log('uniq', uniq)
            var setToArray = Array.from(uniq)

            // Need to be fixed, loading:false setState once, when last markdown file mapped
            // done !just sending the false of loading in mapping put distracted markdown
            // title/frontmatter into shallow this.state.posts

            this.setState({posts: shallowPosts, loading: false, categories: setToArray})

        })
    }

    render() {
        const {posts, loading, categories} = this.state
        const props = this.props

        if (loading) {
            return <RenderingIcon></RenderingIcon>
        } else {
            return (
                <div className="posts-container">
                    <aside className="categories">
                        {/* category called */}
                        {
                            categories.map(
                                (category, i) => <Link to={category}>
                                    <h4 className="category" key={i}>{category}</h4>
                                </Link>
                            )
                        }
                    </aside>

                    {/* posts call through mapping  */}
                    <article className="posts">
                        {

                            posts.map((post, i) => {

                                if (post.frontmatter.status === 'draft') {
                                    return console.log(post.title, 'draft md file exist')
                                }else if(post=== undefined || post.path===undefined){
                                    return console.log('no post')
                                }
                                
                                else {
                                    console.log('post', post)

                                    return <Link
                                        to={post
                                            .path
                                            .replace(/ /gi, "-")}>

                                        <div className='post-link-frame' key={i}>
                                            <h3 className='numbering'>{i}</h3>
                                            <img src={post.frontmatter.thumbnail}></img>
                                            <h4 className='post-title'>{post.title}</h4>
                                        </div>
                                    </Link>
                                }
                            })
                        }</article>

                    <Route path={`${props.match.path}`} ></Route>
                </div>

            )
        }

    }

}