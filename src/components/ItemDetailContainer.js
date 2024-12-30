import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        // Simulate fetching item data
        const fetchItem = async () => {
            const mockData = {
                id,
                title: `Producto ${id}`,
                description: `Descripción del producto ${id}`,
                imageUrl: "https://via.placeholder.com/150",
            };
            setTimeout(() => setItem(mockData), 500);
        };
        fetchItem();
    }, [id]);

    if (!item) return <p>Cargando...</p>;

    return (
        <div className="container mt-5">
            <h1>{item.title}</h1>
            <img src={item.imageUrl} alt={item.title} />
            <p>{item.description}</p>
        </div>
    );
}

export default ItemDetailContainer;
