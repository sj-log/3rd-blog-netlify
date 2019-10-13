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
                        <FontAwesomeIcon icon={faLeaf} color='grey'/>
                    </li>
                    <li>
                        <Link to="/about">Who</Link>
                    </li>
                    <li>
                        <Link to="/small-thought">Small thought</Link>
                    </li>
                    <li>
                        <Link to="/long-thought">Long thought</Link>
                    </li>

                </ul>
            </nav>
        )
    }
}