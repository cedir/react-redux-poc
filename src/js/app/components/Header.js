import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';


const Header = () => {
    return (
        <nav>
        <IndexLink to="/">Home</IndexLink>
        {' | '}
        <Link to="/add-todo">TODO app</Link>
        </nav>
    );
};

export default Header;

