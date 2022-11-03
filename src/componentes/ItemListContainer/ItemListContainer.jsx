import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { ItemList } from '../ItemList/ItemList';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { dataBase } from '../../utils/firebase.js'

import './ItemListContainer.css';
// import { faChessKing } from '@fortawesome/free-regular-svg-icons';

export const  ItemListContainer = () => {
    
    const {catId} = useParams();
    const [products, setProducts] = useState([]);

    useEffect( () => {
        const getData = async() => {
            let queryRef;
            if(catId) {
                queryRef = query(collection(dataBase, 'items'), where('category', '==', catId));
            } else {
                queryRef = collection(dataBase, 'items');
            }

            const response = await getDocs(queryRef)
            const documents = response.docs;
            const results = documents.map( element => {
                return({
                    ...element.data(),
                    id:element.id
                })
            })
            setProducts(results);
        }
        getData();
    }, [catId])

    return(
        <>
            <div className="container-fluid backgroundCard">
                <div className='d-flex flex-column '>
                    <div className='d-flex justify-content-center align-items-center w-100'>
                        <h3 className='w-75 mt-5 text-center titleStyle'>We make your daily routine more sustainable with products that are <strong>plastic-free</strong>, cruelty-free and made with <strong>clean ingredients.</strong></h3>
                    </div>
                </div>

                <div className='col p-4'>
                   <ItemList items={products}/>
                </div>
                
            </div>
        </>
    )
}

