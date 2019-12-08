import React from 'react'
import {Link} from 'react-router-dom'
import * as matter from 'gray-matter';
import RenderingIcon from './RenderingIcon'
// import CategorizedPosts from './CategorizedPosts'

const importAll = (r) => r
    .keys()
    .map(r);

const markdownFiles = importAll(require.context('../posts', false, /\.md$/))
    .sort()
    .reverse();

export default class LongThoughts extends React.Component {
    constructor(props) {
        super(props)
        console.log('0 constructor')

        this.state = {
            loading: true,
            posts: [],
            categories: []
        }

    }
    shouldComponentUpdate() {

        // control center for re-render

        if (this.state.posts.length !== markdownFiles.length - 1) {
            // if still loading , do not rerender yet undefined == first open posts page, so
            // let them loading first all posts
            return false
        } else {
            // console.log('Post loading is completed')
            return true
        }
    }

    componentWillReceiveProps(nextProps, prevProps, nextState, prevState) {
        // when prevProps're changed console.log('3 componentWillReceiveProps')
        // console.log(1, 'prevSearch', prevProps.location, 'nextSearch',
        // nextProps.location, 'nextState', nextState, 'prevState', prevState,
        // 'this.state')
        if (prevProps.location !== nextProps.location) {
            // but if prevProps.location has a props(different location.search value by
            // click), then re-render please how to make the posts component get reloaded!?
            // console.log('preProps changed')
            this.postsProc()
            this.showPosts(this.state.posts, this.state.categories)
        }
    }

    postsProc(prevState) {
        // console.log('4 postProc')

        markdownFiles.map(async(md, i) => {
            var distracting = await fetch(md).then(async(res) => {

                // making Title
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

                // get query-string the category object
                // var lsCategory = qs
                //     .parse(window.location.search)
                //     .category

                // if (frontmatter.category === lsCategory || (frontmatter.category !==
                // undefined && frontmatter.category.includes(lsCategory))) {     // if this
                // parsing md frontmatter has the querystring category, put them into     //
                // 'frontmatter'     var parcel = {         frontmatter,         title, path
                // }     return parcel } else { if not, just frontmatter only(to leave category
                // tab without change)
                var parcel = {
                    frontmatter,
                    title,
                    path
                }

                // console.log('parcel', parcel)  return whole categories just
                return parcel
                // }

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

            if (prevState !== undefined) {
                // setState right away
                this.setState((prevState) => ({posts: prevState.shallowPosts, loading: false, categories: prevState.setToArray}))

            } else {
                // delayed setState
                this.setState({posts: shallowPosts, loading: false, categories: setToArray})

            }

        })

    }

    showPosts(posts, categories) {
        // console.log('5 showPosts')
        return (
            <div className="posts-container">

                {/* posts call through mapping  */}
                <article className="posts">

                    <h1>Book</h1>
                    {posts.map((post, i) => {

                        if (post.frontmatter.category === 'Book' && post.frontmatter.status !== 'draft') {
                            return <div className='post-link-frame' key={i}>
                                <Link
                                    className="title-wrapper"
                                    to={post
                                    .path
                                    .replace(/ /gi, "-")}
                                    key={i}>

                                    <span className='post-title'>{post.title}</span>

                                </Link>
                            </div>

                        }
                    })
}
                    <h1>Essay</h1>
                    {posts.map((post, i) => {

                        if (post.frontmatter.category === 'Essay' && post.frontmatter.status !== 'draft') {
                            return <div className='post-link-frame' key={i}>
                                <Link
                                    className="title-wrapper"
                                    to={post
                                    .path
                                    .replace(/ /gi, "-")}
                                    key={i}>

                                    <span className='post-title'>{post.title}</span>

                                </Link>
                            </div>
                        }
                    })
}
                    <h1>TIL</h1>
                    {posts.map((post, i) => {

                        if (post.frontmatter.category === 'TIL' && post.frontmatter.status !== 'draft') {
                            return <div className='post-link-frame' key={i}>
                                <Link
                                    className="title-wrapper"
                                    to={post
                                    .path
                                    .replace(/ /gi, "-")}
                                    key={i}>

                                    <span className='post-title'>{post.title}</span>

                                </Link>
                            </div>
                        }
                    })
}<h1>Marketing</h1>
                    {posts.map((post, i) => {

                        if (post.frontmatter.category === 'Marketing' && post.frontmatter.status !== 'draft') {
                            return <div className='post-link-frame' key={i}>
                                <Link
                                    className="title-wrapper"
                                    to={post
                                    .path
                                    .replace(/ /gi, "-")}
                                    key={i}>

                                    <span className='post-title'>{post.title}</span>

                                </Link>
                            </div>
                        }
                    })
}<h1>Rescue</h1>
                    {posts.map((post, i) => {

                        if (post.frontmatter.category === 'Wholesome.ee' && post.frontmatter.status !=='draft') {
                            return <div className='post-link-frame' key={i}>
                                <Link
                                    className="title-wrapper"
                                    to={post
                                    .path
                                    .replace(/ /gi, "-")}
                                    key={i}>

                                    <span className='post-title'>{post.title}</span>

                                </Link>
                            </div>
                        }
                    })
}
                    <h1>Coding</h1>
                    {posts.map((post, i) => {

                        if ((post.frontmatter.category === 'Coding' || post.frontmatter.category === 'coding' ) && post.frontmatter.status !=='draft') {
                            return <div className='post-link-frame' key={i}>
                                <Link
                                    className="title-wrapper"
                                    to={post
                                    .path
                                    .replace(/ /gi, "-")}
                                    key={i}>

                                    <span className='post-title'>{post.title}</span>

                                </Link>
                            </div>
                        }
                    })
}
                    <h1>Bali Life</h1>
                    {posts.map((post, i) => {

                        if (post.frontmatter.category==='Bali Life' && post.frontmatter.status !=='draft') {
                            return <div className='post-link-frame' key={i}>
                                <Link
                                    className="title-wrapper"
                                    to={post
                                    .path
                                    .replace(/ /gi, "-")}
                                    key={i}>

                                    <span className='post-title'>{post.title}</span>

                                </Link>
                            </div>
                        }
                    })}

                    <h1>Productivity</h1>
                    {posts.map((post, i) => {

                        if (post.frontmatter.category==='Productivity' && post.frontmatter.status !=='draft') {
                            return <div className='post-link-frame' key={i}>
                                <Link
                                    className="title-wrapper"
                                    to={post
                                    .path
                                    .replace(/ /gi, "-")}
                                    key={i}>

                                    <span className='post-title'>{post.title}</span>

                                </Link>
                            </div>
                        }
                    })}

                </article>

            </div>
        )

    }

    componentDidMount() {
        console.log('2 componentDidMount')

        this.postsProc()

    }

    render() {
        console.log('1 render')

        const {posts, categories, loading} = this.state

        if (loading) {
            return <RenderingIcon></RenderingIcon>
        } else {
            return this.showPosts(posts, categories)

        }

    }
}

// <aside className="categories"> {/* category called */} {     categories.map(
//       // url sended through category         (category, i) => <Link to={`${
// `?category=` + category}`} key={i}>             <h4 className="category"
// key={i}>{category}</h4>         </Link>     ) } </aside> posts.map((post, i)
// => {     if (post.frontmatter.status === 'draft') {         return
// console.log(post.title, 'draft md file exist')     } else if (post ===
// undefined || post.path === undefined) {         return console.log('no post')
//     } else {         return  <div className='post-link-frame' key={i}>
// <Link              className="title-wrapper"             to={post
// .path                 .replace(/ /gi, "-")}             key={i}>
// <span className='numbering'>{i} </span>                 <span
// className='post-title'>{post.title}</span>         </Link>         </div> }
// })