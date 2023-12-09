export const ItemCounter = ({ onAdd }) => {
    return (
    <>
        <div>-</div>
        <input />
        <div>+</div>
        <button onClick={onAdd}>Agregar al carrito</button>
    </>
    );
};