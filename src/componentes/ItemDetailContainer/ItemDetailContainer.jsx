import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { productsArray } from '../Data/Data';

import './ItemDetailContainer.css';

export const ItemDetailContainer = () => {

    const {id} = useParams();
    const [itemProduct, setItemProduct] = useState({});

    const promesa = new Promise((resolve) => {
        setTimeout(() => {
            resolve(productsArray);
        }, 2000);
    })

    useEffect(() => {
        const getProduct = async() => {
            const products = await promesa;
            const product = products.find(elemento => elemento.id === parseInt(id));
            setItemProduct(product);
        }
        getProduct();
    },[id])


    return(
        <>
            <div className="backgroundCard">
                <ItemDetail item={itemProduct}/>
            </div>
        </>
    )

}