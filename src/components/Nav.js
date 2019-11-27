import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";

export default class Nav extends React.Component {
    render() {
        return (
            <nav className="nav">

                <ul>
                   
                    <li>
                        <Link to="/log">log</Link>
                    </li>

                </ul>
            </nav>
        )
    }
}