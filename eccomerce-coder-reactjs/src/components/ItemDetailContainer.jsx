import { useParams } from 'react-router-dom';
import { useEffect, useState} from "react";
import Container from 'react-bootstrap/Container';

import { ItemDetail } from './ItemDetail';
import { productos } from '../data/products';

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);

    const { id } = useParams();
    
    useEffect(() => {
        const mypromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos);
            }, 250);
        });

        mypromise.then((response) => {
            const findById = response.find((item) => item.id === Number(id));
            setItem(findById);
        });
    }, [id]);

    return (
        <Container className='mt-4'>
            {item ? <ItemDetail item={item} /> : <>Loading...</>}
        </Container>
    );
};