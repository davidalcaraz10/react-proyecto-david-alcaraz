import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import { dataBase } from '../../utils/firebase.js'

import './ItemDetailContainer.css';

export const ItemDetailContainer = () => {

    const {id} = useParams();
    const [item, setItem] = useState([]);

    useEffect( () => {
        const getDataI = async() => {
            const queryRef = doc(dataBase, 'items', id)
            const response = await getDoc(queryRef)
            const result = {
                ...response.data(),
                id:response.id
            }
            setItem(result)
        }
        getDataI();
    }, [id])

    return(
        <>
            <div className="backgroundCard">
                <ItemDetail item={item} stock={10} dflt={1}/>
            </div>
        </>
    )

}