import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { ItemList } from '../ItemList/ItemList';
import { productsArray } from '../Data/Data';

import './ItemListContainer.css';
// import { faChessKing } from '@fortawesome/free-regular-svg-icons';

export const  ItemListContainer = () => {
    
    const {catId} = useParams();
    const [products, setProducts] = useState([]);

    const promesa = new Promise((resolve) => {
        setTimeout(() => {
            resolve(productsArray);
        }, 2000);
    })

    useEffect( () => {
        promesa.then((response)=> {
            if(catId){
                const filtering = response.filter(pr => pr.category === catId);
                setProducts(filtering);
            } else {
                setProducts(response)
            }
        })
    },[catId])

    return(
        <>
            <div className="container-fluid backgroundCard">
                <div className='d-flex flex-column '>
                    <div className='d-flex justify-content-center align-items-center w-100'>
                        <h3 className='w-75 mt-5 text-center titleStyle'>We make your daily routine more sustainable with products that are <strong>plastic-free</strong>, cruelty-free and made with <strong>clean ingredients.</strong></h3>
                    </div>
                </div>

                <div className='col m-4'>
                   <ItemList items={products}/>
                </div>
                
            </div>
        </>
    )
}

