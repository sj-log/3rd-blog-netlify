import React from 'react'
import {Link} from "react-router-dom";

export default class Nav extends React.Component {
    render() {
        return (
            <nav className="nav">

                <ul>
                    <li>
                       <Link to="/" className="logo">Sj</Link>
                       </li>
                    <li>
                        <Link to="/log">log</Link>
                    </li>

                </ul>
            </nav>
        )
    }
}