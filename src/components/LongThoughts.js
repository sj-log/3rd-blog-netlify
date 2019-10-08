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
            titles: null,
            thumbnails: null,
            dates: null,
            category:null,
            tags:null,
        }
    }

    componentDidMount() {

        markdownFiles.map((md) => {
            fetch(md).then((res)=>
                // for getting the titles > substrings > 
                {   console.log('res',res)
                    // response > response.url to substring
                    var mdUrl = decodeURI(res.url)
                    console.log(mdUrl)
                    var ns = mdUrl.substring(mdUrl.lastIndexOf('/') + 1)
                    var hn = ns.split(".")[0];
                    var dehypen = hn.replace(/-/gi, ' ')
                    var title = dehypen.substring(11)
                    console.log('title',title)

                    return res.text()}
).then((text)=>{
               
                // getFrontMatter Infos
                var eachMdPosts = matter(text)
                var postFrontMatters = eachMdPosts.data
                // this.setState({dates: postFrontMatters.dates})

                console.log(postFrontMatters)
            })
        })

    }

    render() {
        var {
            titles,
            thumbnails,
            dates
        } = this.state;
        return (<div className="posts-container"></div>)
    }
}

/* {
                markdownFiles.map((md, i) => {

                    var ns = md.substring(md.lastIndexOf('/') + 1)
                    var hn = ns.split(".")[0];
                    var dehypen = hn.replace(/-/gi, ' ')
                    var title = dehypen.substring(11)

                    console.log(hn)

                    console.log(title)

                    return (
                        <Link to={`${props.match.url}/${hn}`} key={i}>
                            <article className={'post-blocks ' + i}>
                                {title}
                            </article>
                        </Link>
                    )
                })
            } */