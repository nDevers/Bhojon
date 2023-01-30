import React, { createContext, useState } from 'react';
import {toast} from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        toast.success(`${item.name} added to cart!`);
        setCart([...cart, {...item,id:cart.length}]);
    };

    const removeFromCart = (item) => {
        setCart(cart.filter((i) => i.id !== item.id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
