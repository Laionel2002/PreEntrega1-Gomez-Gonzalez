import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getProducts } from '../services';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
    getProducts().then(data => setProducts(data));
    }, []);

    return (
    <div>
        <ItemList products={products} />
    </div>
    );
};

export default ItemListContainer;