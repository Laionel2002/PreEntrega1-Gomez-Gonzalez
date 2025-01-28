import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import Brief from './Brief';

const Checkout = () => {
    const { cart } = useContext(CartContext);

    return (
    <div>
        <h1>Checkout</h1>
        <Brief cart={cart} />
    </div>
    );
};

export default Checkout;