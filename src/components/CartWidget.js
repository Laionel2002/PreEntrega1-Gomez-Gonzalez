import React from 'react';

function CartWidget({ cart, onRemove }) {
    return (
    <div className="cart-widget">
        <h3>Carrito</h3>
        {cart.map(item => (
        <div key={item.id}>
            <span>{item.name} - {item.price}€</span>
            <button onClick={() => onRemove(item.id)}>Eliminar</button>
        </div>
        ))}
    </div>
    );
}

export default CartWidget;