import React from "react";

function CartWidget() {
    return (
        <div className="d-flex align-items-center">
            <i className="bi bi-cart" style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}></i>
            <span className="badge bg-primary">3</span>
        </div>
    );
}

export default CartWidget;
