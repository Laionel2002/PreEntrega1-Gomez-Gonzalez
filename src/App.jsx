import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartProvider } from "./components/CartContext"; // Asegúrate de importar CartProvider
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ItemList from './ItemList';

function App() {
    return (
    <CartProvider> {/* Envuelve tu aplicación con CartProvider */}
        <Router>
        <div>
            <NavBar />
          <Routes> {/* Corrige Boutes a Routes */}
            <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes> {/* Corrige Boutes a Routes */}
        </div>
        </Router>
    </CartProvider>
    );
}

export default App;