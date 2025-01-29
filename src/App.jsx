import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartWidget from "./components/CartWidget";
import Checkout from "./components/Checkout";
import Description from "./components/Description";
import ItemDetail from "./components/ItemDetail";
import ItemList from "./components/ItemList";
import ItemQuantitySelector from "./components/ItemQuantitySelector";
import AddItemButton from "./components/AddItemButton";
import Brief from "./components/Brief";
import ProfileCard from "./components/ProfileCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
    return (
    <Router>
        <div>
        <NavBar />
        <CartWidget />
        <Routes>
            <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/description" element={<Description />} />
            <Route path="/itemdetail" element={<ItemDetail />} />
            <Route path="/itemlist" element={<ItemList />} />
            <Route path="/itemquantityselector" element={<ItemQuantitySelector />} />
            <Route path="/additembutton" element={<AddItemButton />} />
            <Route path="/brief" element={<Brief />} />
            <Route path="/profilecard" element={<ProfileCard />} />
        </Routes>
        </div>
    </Router>
    );
}

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