import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './NavBar';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Checkout from './Checkout';
import { CartProvider } from './CartContext';

const App = () => {
    return (
    <CartProvider>
    <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/checkout" element={<Checkout />} />
        </Routes>
        </Router>
    </CartProvider>
);
};

export default App  