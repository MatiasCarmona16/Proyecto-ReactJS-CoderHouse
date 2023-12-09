import { Link } from "react-router-dom";
import cart from "../assets/carrito-de-compras.png"

export const CartWidget = () => {
    return (
        <Link to="/cart">
            <img src={cart} alt="Carrito" width={25} />          <span>5</span>
        </Link>
    );
};