// App.js
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/front/Header/Header";
import Routes from "./components/front/Routes/Routes";
import data from "./components/back/Data/Data";

const App = () => {
    const { productItems } = data;
    const [cartItems, setCartItems] = useState([]);

    const handleAddProduct = (product) => {
        const productExist = cartItems.find((item) => item.id === product.id);
        if (productExist) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id
                        ? { ...productExist, quantity: productExist.quantity + 1 }
                        : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const handleRemoveProduct = (product) => {
        const productExist = cartItems.find((item) => item.id === product.id);
        if (productExist.quantity === 1) {
            setCartItems(
                cartItems.filter((item) =>
                    item.id !== product.id));


        } else {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id ? { ...productExist, quantity: productExist.quantity - 1 }
                        : item
                )
            );

        }
    };

    return (
        <Router>
            <>
                <Header />
                <Routes
                    productItems={productItems}
                    cartItems={cartItems}
                    handleAddProduct={handleAddProduct}
                    handleRemoveProduct={handleRemoveProduct}
                />
            </>
        </Router>
    );
};

export default App;
