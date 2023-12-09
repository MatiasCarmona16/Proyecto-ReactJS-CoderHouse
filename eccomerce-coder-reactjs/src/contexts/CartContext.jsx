import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const[items,setItems] = useState ([])

    const clear = () => setItems ([]);

    const onAdd = (item) => setItems((prev) => {
        return [...prev, item];
    });
    
    return (
    <CartContext.Provider value={{ items, clear, onAdd }}>{children}</CartContext.Provider>
    );
};