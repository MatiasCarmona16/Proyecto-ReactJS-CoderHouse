import { Link } from "react-router-dom";
import cart from "../assets/carrito-de-compras.png";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const CartWidget = () => {
    const { items } = useContext(CartContext);

    const total = items.reduce((acumulador, valorActual) => acumulador + valorActual.quantity, 0);

    return (
        <Link to="/cart">
            <img src={cart} alt="Carrito" width={25} />          <span>{total}</span>
        </Link>
    );
};