import { useContext } from "react";

import { ItemCounter } from "./ItemCounter";
import { CartContext } from "../contexts/CartContext";
import { productos } from "../data/products";

export const ItemDetail = ({item}) => {
    const { onAdd } = useContext(CartContext);

    const add = () => {
        onAdd(item);

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
            <ItemCounter onAdd={add} />
        </>
    );
};
