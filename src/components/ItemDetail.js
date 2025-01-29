import React from 'react';

function ItemDetail({ item, onAddToCart, onBack }) {
    return (
    <div>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>{item.price}€</p>
        <button onClick={() => onAddToCart(item)}>Añadir al carrito</button>
        <button onClick={onBack}>Volver</button>
    </div>
    );
}

export default ItemDetail;