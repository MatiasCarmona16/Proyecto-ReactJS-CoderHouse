import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const[items,setItems] = useState ([])

    const clear = () => setItems ([]);

    const onAdd = (item) => setItems((prev) => {
        return [...prev, item];
    });

    const onRemove = (id) => {
        const filterItems = items.filter((item) => item.id !== id);
        setItems(filterItems);
    };
    
    return (
    <CartContext.Provider value={{ items, clear, onAdd, onRemove }}>{children}</CartContext.Provider>
    );
};