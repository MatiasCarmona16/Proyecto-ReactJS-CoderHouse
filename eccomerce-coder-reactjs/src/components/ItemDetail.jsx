export const ItemDetail = ({item}) => {

    return (
        <>
            <h1>{item.title}</h1>
            <img src={item.pictureUrl} />
            <div></div>
        </>
    );
};
