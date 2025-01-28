import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    return (
    <div>
        🛒 {cart.length}
    </div>
    );
};

export default CartWidget   