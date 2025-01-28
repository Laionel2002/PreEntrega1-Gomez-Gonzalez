import React, { useState } from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';
import Description from './Description';
import AddItemButton from './AddItemButton';

const ItemDetail = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

    return (
    <div>
        <h2>{product.name}</h2>
        <Description text={product.description} />
        <ItemQuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <AddItemButton product={product} quantity={quantity} />
    </div>
    );
};

export default ItemDetail;