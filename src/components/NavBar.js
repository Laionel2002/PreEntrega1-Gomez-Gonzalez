import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
    <nav>
        <Link to="/">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/our-values">Our values</Link>
        <Link to="/contact">Contact</Link>
    </nav>
    );
};

export default NavBar;