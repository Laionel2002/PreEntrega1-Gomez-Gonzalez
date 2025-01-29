import React from 'react';

function NavBar({ cartCount, onCheckout }) {
    return (
    <nav>
        <h1>Mi Tienda</h1>
        <button onClick={onCheckout}>Ver Carrito ({cartCount})</button>
    </nav>
    );
}

export default NavBar;