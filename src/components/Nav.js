import React from 'react'

import {Link} from "react-router-dom";

export default class Nav extends React.Component {
    render() {
        return (
            <nav className="nav">
                 <ul>

                    <li>
                        <Link to="/about">Who</Link>
                    </li>
                    <li>
                        <Link to="/small-thought">Small thought</Link>
                    </li>
                    <li>
                        <Link to="/long-thought">Long thought</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/book-review">Book Review</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}