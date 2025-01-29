import React, { useState } from 'react';
import NavBar from './components/NavBar';
import ItemList from './components/ItemList';
import ItemDetail from './components/ItemDetail';
import CartWidget from './components/CartWidget';
import Checkout from './components/Checkout';
import './App.css';

function App() {
    const [cart, setCart] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [showCheckout, setShowCheckout] = useState(false);

    const addToCart = (item) => {
    setCart([...cart, item]);
    };

    const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
    };

    const handleItemClick = (item) => {
    setSelectedItem(item);
    };

    const handleCheckout = () => {
    setShowCheckout(true);
    };

    return (
    <div className="App">
        <NavBar cartCount={cart.length} onCheckout={handleCheckout} />
        {showCheckout ? (
        <Checkout cart={cart} onRemove={removeFromCart} />
        ) : selectedItem ? (
        <ItemDetail item={selectedItem} onAddToCart={addToCart} onBack={() => setSelectedItem(null)} />
        ) : (
        <ItemList onItemClick={handleItemClick} />
        )}
        <CartWidget cart={cart} onRemove={removeFromCart} />
    </div>
    );
}

export default App;