import { useContext } from "react";

import { ItemCounter } from "./ItemCounter";
import { CartContext } from "../contexts/CartContext";
import { productos } from "../data/products";

export const ItemDetail = ({item}) => {
    const { onAdd } = useContext(CartContext);

    const add = (quantity) => {
        onAdd(item, quantity);

        Toastify({

            text: `Añadiste el ${item.title} al carro`,
            
            duration: 2200,
            gravity: "bottom", 
            style: {
                background: "#000000"
            }
            
            }).showToast();
    };

    return (
        <>
            <h1>{item.title}</h1>
            <img src={item.pictureUrl} width={300} />
            <h2 style={{fontSize: 24, margin: "10px 0 0 30px"}}>Cantidad disponible: {item.stock}</h2>
            <ItemCounter onAdd={add} stock={item.stock} initial={1} />
        </>
    );
};
