import React from 'react'
import * as matter from 'gray-matter';

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
        console.log(this.props)
        console.log(pathname, key)

        return (

            <div className='post-card'>
                <header>
                    <h1>{frontmatter.title}</h1>
                    <span>{frontmatter.date}</span>
                </header>
                <MarkdownReact source={md}></MarkdownReact>

                <footer>
                    <div id="disqus_thread"></div>
                    <script dangerouslySetInnerHTML={{ __html:`  var disqus_config = function () {
                        this.page.url = `+pathname+`;  // Replace * PAGE_URL with your page's canonical URL variable
                        this.page.identifier = `+key+`; // Replace PAGE_IDENTIFIER with your page's unique * identifier variable
                            };
 
                (function() { // DON'T EDIT BELOW THIS LINE
                    var d = document, s = d.createElement('script');
                    s.src = 'https://ollagada.disqus.com/embed.js';
                    s.setAttribute('data-timestamp', +new Date());
                    (d.head || d.body).appendChild(s);
                    })();
                    }</script>
           
                    <noscript>Please enable JavaScript to view the
                        <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
                    </noscript>
`}}>{
        
    }
</script>

 
                </footer>

            </div>

        )
}

}

export default LongThought;
