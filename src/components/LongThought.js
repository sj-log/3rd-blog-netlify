import React from 'react'
import Disqus from 'disqus-react';

// remark-react libraries 3
import MarkdownReact from 'react-markdown';

class LongThought extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            md: null,
            title: props.match.params.title
        }
    }

    componentDidMount() {
        var postTitle = this.state.title;
        console.log(postTitle)
        const mdr = require(`../posts/${postTitle}.md`)
        console.log(mdr)

        fetch(mdr)
            .then((res) => res.text())
            .then(text => {
                this.setState({md: text})
            })
    }

    render() {
        const {md} = this.state;
        console.log(this.props)

        // disqus init
        const disqusShortname = 'ollagada';
        // const disqusConfig = {
        //     url: this.props.article.url,
        //     identifier: this.props.article.id,
        //     title: this.props.article.title,
        // };
 


        return (
            <div className='post-card'>
                <MarkdownReact source={md}></MarkdownReact>
                {/* <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
                    Comments
                </Disqus.CommentCount>
                <Disqus.CommentEmbed 
                    commentId={this.props.article.featuredComment}
                    showMedia={true}
                    height={160}
                />
                
                <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} /> */}
            </div>
        )
    }

}

export default LongThought;
