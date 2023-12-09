import { useContext } from "react";
import { Container } from "react-bootstrap";

import { CartContext } from "../contexts/CartContext";

export const Cart = () => {
    const { clear, items } = useContext(CartContext);

    return (
        <Container className='mt-4'>
        <h1>Carrito</h1>
        {items?.map((item) => (
        <div key={item.id}>
            <h2>{item.title}</h2>
            <h3>{item.price}</h3>
            <img src={item.pictureUrl} width={200} />
        </div>
        ))}
        <button onClick={clear}>Vaciar Carrito</button>
        </Container>
    );
};