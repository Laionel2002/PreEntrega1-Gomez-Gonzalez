import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
    return (
        <div>
            <NavBar />
            <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
        </div>
    );
}

export default App;
