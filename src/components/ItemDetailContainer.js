import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
    // Aquí puedes hacer una llamada a una API para obtener los detalles del producto
    const fetchItem = async () => {
        const response = await fetch(`https://api.example.com/items/${id}`);
        const data = await response.json();
        setItem(data);
    };

    fetchItem();
    }, [id]);

    if (!item) return <div>Loading...</div>;

    return (
    <div>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>${item.price}</p>
    </div>
    );
};

export default ItemDetailContainer;