import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import { dataBase } from '../../utils/firebase.js'
import sorryPage from '../../assets/images/sorryPage.png';

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
                {
                    item.img === undefined ? 
                    <div>
                        <img src={sorryPage} alt="sorry"className="w-100 hhh"/>
                    </div>  
                    :
                    <ItemDetail item={item} stock={10} dflt={1}/>
                }
            </div>
        </>
    )

}