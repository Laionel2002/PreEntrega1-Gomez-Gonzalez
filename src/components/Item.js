import React from "react";
import { Link } from "react-router-dom";

function Item({ id, title, imageUrl }) {
    return (
        <div className="card">
            <img src={imageUrl} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <Link to={`/item/${id}`} className="btn btn-primary">
                    Ver Detalle
                </Link>
            </div>
        </div>
    );
}

export default Item;