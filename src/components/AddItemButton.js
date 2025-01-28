import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const AddItemButton = ({ product, quantity }) => {
    const { addToCart } = useContext(CartContext);

    return (
    <button onClick={() => addToCart(product, quantity)}>
        Agregar al carrito
    </button>
    );
};

export default AddItemButton;