import cart from "../assets/carrito-de-compras.png"

export const CartWidget = () => {

    return (
        <>
            <img src={cart} alt="Carrito" width={25} />          <span>5</span>
        </>
    );
};