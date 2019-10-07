import React from 'react'
import {Link} from 'react-router-dom'

const LongThought = (props) => {
    console.log(props)
    return (

        <div className="posts-container">

            {

                markdownFiles.map((md, i) => {
        
                   
                    var ns = md.substring(md.lastIndexOf('/') + 1)
                    var hn = ns.split(".")[0];
                    var dehypen = hn.replace(/-/gi, ' ') 
                    var title = dehypen.substring(11)
                    
                    console.log(hn)
                    
                    console.log( title)
                  

                    return (
                    <article className={'post-blocks' +i} >
                    <Link to={`${props.match.url}/${hn}`}  >
                        {title}
                    </Link>
                    </article>)
                })
            }
        </div>
    )
}

const importAll = (r) => r
    .keys()
    .map(r);

const markdownFiles = importAll(require.context('../posts', false, /\.md$/))
    .sort()
    .reverse();

export default LongThought;