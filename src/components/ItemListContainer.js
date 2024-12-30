import React from "react";

function ItemListContainer({ greeting }) {
    return (
        <div className="container mt-5">
            <h1 className="text-center">{greeting}</h1>
        </div>
    );
}

export default ItemListContainer;
