import React, {Component} from 'react';
import styles from '../scss/styles.scss'
import {Link, Route} from 'react-router-dom';
import LongThought from './LongThought';

const importAll = (r) => r
    .keys()
    .map(r);

const markdownFiles = importAll(require.context('../posts', false, /\.md$/))
    .sort()
    .reverse();

export default class LongThoughts extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            titles: [],
            paths : []  
        }

    }



    getData(){
        

        markdownFiles.forEach(md => {
            var ns = md.substring(md.lastIndexOf('/') + 1)
            var hn = ns.substring(10, ns.indexOf('.'))
            var rgx = /-/gi
            var rh = hn.replace(rgx, ' ')
            var rrh = rh.substring(1)

        
            var path = md;
            console.log(path)

            this.setState({
                paths: [
                    ...this.state.paths,path
                ]
            })

            this.setState({
                titles: [
                    ...this.state.titles,rrh
                ]
            })
        });


    }

    async componentDidMount() {

        const posts = await Promise
            .all(
                markdownFiles.map((file) => fetch(file).then((res) => res.text()))
            )
            .catch((err) => console.error(err));


            this.getData();


        this.setState((state) => ({
            ...state,
            posts

        }));




    }

    render() {
        const {titles}= this.state;

        return (
            <section className={`post-container ${styles.titles}`}>

                {
                    titles.map((title, idx) => (
                        <Link to={`${this.props.match.params.id}`} key={idx}> 
                            <figure className="post-card">
                                <div className="card-content">

                                    {title}

                                </div>
                            </figure>
                        </Link>
                    ))
                }
            
            </section>
        );

    }
}
