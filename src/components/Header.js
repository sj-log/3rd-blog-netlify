import React from 'react';
import Helmet from './Helmet';
import Nav from './Nav';

const Header = () => {
    return (
        <header className="header">
            <Helmet/>
            <Nav/>
        </header>
    )
}

export default Header;