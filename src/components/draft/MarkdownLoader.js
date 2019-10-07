import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import styles from '../scss/styles.scss'
import { Link } from 'react-router-dom';

const importAll = (r) => r
    .keys()
    .map(r);
const markdownFiles = importAll(require.context('../posts', false, /\.md$/))
    .sort()
    .reverse();

export default class MarkdownFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    async componentDidMount() {

        const posts = await Promise
            .all(
                markdownFiles.map((file) => fetch(file).then((res) => res.text()))
            )
            .catch((err) => console.error(err));

        // const titles = markdownFiles.forEach(md => {
        //     var ns = md.substring(md.lastIndexOf('/') + 1)
        //     var hn = ns.substring(10, ns.indexOf('.'))
        //     var rgx = /-/gi
        //     var rh = hn.replace(rgx, ' ')
        //     var rh = rh.substring(1)

        //     this.setState({
        //         titles: [
        //             ...this.state.titles,
        //             rh
        //         ]
        //     })
        // });


        this.setState((state) => ({
            ...state,
            posts

        }));

    }

    render() {
        const {posts} = this.state;
        const {titles} = this.state;

        console.log(this.state.posts)
        console.log(this.state.titles)

        // const markdownContext = require.context('../posts', false, /\.md$/);
        // console.log(markdownContext);

        return (
            <section className={`post-container ${styles.titles}`}>

                {
                    posts.map((post, idx) => (
                        <Link to=""><figure className="post-card" key={idx}>
                            <header>
                            </header>
                            <div className="card-content">
                                <div className="content">
                                    <ReactMarkdown source={post}/>
                                </div>
                            </div>
                        </figure></Link>
                    ))
                }

            </section>
        );

    }

}