import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";

function ItemListContainer({ greeting }) {
    const { id } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Simulate fetching data
        const fetchItems = async () => {
            const mockData = [
                { id: "1", title: "Producto 1", imageUrl: "https://via.placeholder.com/150" },
                { id: "2", title: "Producto 2", imageUrl: "https://via.placeholder.com/150" },
                { id: "3", title: "Producto 3", imageUrl: "https://via.placeholder.com/150" },
            ];
            setTimeout(() => {
                if (id) {
                    setItems(mockData.filter(item => item.id === id));
                } else {
                    setItems(mockData);
                }
            }, 500);
        };
        fetchItems();
    }, [id]);

    return (
        <div className="container mt-5">
            <h1>{greeting}</h1>
            <div className="row">
                {items.map(item => (
                    <div className="col-md-4" key={item.id}>
                        <Item id={item.id} title={item.title} imageUrl={item.imageUrl} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemListContainer;