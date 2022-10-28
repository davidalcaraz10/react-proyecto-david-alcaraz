import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { collection, doc, getDoc } from 'firebase/firestore';
import { dataBase } from '../../utils/firebase';

import './CartWidget.css';

export const CartWidget = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const value = useContext(CartContext);
    const {cartElements, total, numberProducts, removeItem} = value;
    const [orderId, setOrderId] = useState("");

    // const order = (e)=>{
    //     e.preventDefault();
    //     const compra = {
    //         client:{
    //             name: e.target[0].value,
    //             phone: e.target[1].value,
    //             email: e.target[2].value
    //         },
    //         items: cartElements,
    //         total: total()
    //     }
    //     console.log("compra", compra)
    //     // crear la referencia de donde voy a guardar la informacion en la base de datos.
    //     const queryRef = collection(dataBase,"orders");
    //     //agregar la informacion
    //     addDoc(queryRef,compra).then((resultado)=>{
    //         console.log(resultado.id);
    //         setOrderId(resultado.id);
    //     })
    // }

    // const updateProduct = ()=>{
    //     //creamos la referencia del documento que vamos a actualizar
    //     const queryRef = doc(dataBase,"items","HfIz8PlCwnXt5pws8g9b");
    //     //actualizamos el documento
    //     updateDoc(queryRef,{price:120}).then(()=>console.log("actualizado correctamente")).catch((error)=>console.log("hubo un error"))
    // }
    // const {numberProducts} = useContext(CartContext);


    return(
        <>
            <div className="NavBarGeneral pointer">
            <FontAwesomeIcon icon={faCartShopping} onClick={handleShow} className="me-2"/>
            </div>
            <Offcanvas show={show} onHide={handleClose} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
            </Offcanvas> 
        </>
    )
}