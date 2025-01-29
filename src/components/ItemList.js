import React from 'react';

function ItemList({ onItemClick }) {
    const items = [
    { id: 1, name: 'Producto 1', price: 10, description: 'Descripción del Producto 1' },
    { id: 2, name: 'Producto 2', price: 20, description: 'Descripción del Producto 2' },
    // Agrega más productos aquí
    ];

    return (
    <div>
        {items.map(item => (
        <div key={item.id} onClick={() => onItemClick(item)}>
            <h2>{item.name}</h2>
            <p>{item.price}€</p>
        </div>
        ))}
    </div>
    );
}

export default ItemList;