import { useParams } from 'react-router-dom';
import { useEffect, useState} from "react";
import Container from 'react-bootstrap/Container';

import { productos } from '../data/products';
import { ItemList } from "./ItemList";

export const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);

    const { id } = useParams();
    
    useEffect(() => {
        const mypromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        });

        mypromise.then((response) => {
        if(!id) {
            setItems(response);
        } else {
            const filterByCategory = response.filter(item => item.category === id
        );
        setItems(filterByCategory);
        }
        });
    }, [id]);

    console.log(items);

    return (
        <Container className='mt-4'>
            <h1>{props.greeting}</h1>
            {items ? <ItemList items={items} /> : <>Loading...</>}
        </Container>
    );
};