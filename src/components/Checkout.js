import React from 'react';

function Checkout({ cart, onRemove }) {
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
    <div>
        <h2>Checkout</h2>
        {cart.map(item => (
        <div key={item.id}>
            <span>{item.name} - {item.price}€</span>
            <button onClick={() => onRemove(item.id)}>Eliminar</button>
        </div>
        ))}
        <h3>Total: {total}€</h3>
        <button>Finalizar Compra</button>
    </div>
    );
}

export default Checkout;