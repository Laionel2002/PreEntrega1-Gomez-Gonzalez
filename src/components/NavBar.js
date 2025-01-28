import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
    <nav>
        <Link to="/">Inicio</Link>
        <Link to="/category/1">Categoría 1</Link>
        <Link to="/category/2">Categoría 2</Link>
        <CartWidget />
    </nav>
    );
};

export default Navbar;