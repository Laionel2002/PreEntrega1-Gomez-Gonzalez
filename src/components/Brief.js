import React from 'react';

const Brief = ({ cart }) => {
    return (
    <div>
        <h2>Resumen de la compra</h2>
        {cart.map(item => (
        <div key={item.product.id}>
            <p>{item.product.name} - {item.quantity}</p>
        </div>
        ))}
    </div>
    );
};

export default Brief;