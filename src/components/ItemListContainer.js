import React, { useEffect, useState } from 'react';
import Item from './Item';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
    // Aquí puedes hacer una llamada a una API para obtener los productos
    const fetchItems = async () => {
        const response = await fetch('https://api.example.com/items');
        const data = await response.json();
        setItems(data);
    };

    fetchItems();
    }, []);

    return (
    <div>
        {items.map(item => (
        <Item key={item.id} item={item} />
        ))}
    </div>
    );
};

export default ItemListContainer;