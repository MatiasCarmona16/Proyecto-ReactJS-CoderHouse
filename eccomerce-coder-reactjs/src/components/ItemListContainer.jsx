import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from "react";
import Container from 'react-bootstrap/Container';
import { getFirestore, getDoc, doc } from "firebase/firestore";

import { productos } from '../data/products';
import { ItemList } from "./ItemList";


export const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);

    const { id } = useParams();
    
        useEffect(() => {
        const db = getFirestore();

        const refDoc = doc(db, "Items-Relojes", "LmSqRZCnmgPu7G4AJDtd");

        getDoc(refDoc).then((snapshot) => {
            console.log({ id: snapshot.id, ...snapshot.data() });
        });
        }, []);

        useEffect(() => {
        const mypromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 250)
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