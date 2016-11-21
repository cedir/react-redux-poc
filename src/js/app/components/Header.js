import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';


const Header = () => {
    return (
        <nav className="navbar navbar-default">
            <ul className="nav navbar-nav">
                <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                <li><Link to="/add-todo" activeClassName="active">TODO app</Link></li>
            </ul>
        </nav>
    );
};

export default Header;

