import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/CartContext';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { collection, addDoc } from 'firebase/firestore';
import { dataBase } from '../../utils/firebase';
import { Button, Form } from 'react-bootstrap';

import './CartWidget.css';

export const CartWidget = () => {

    const cleanCart = () => {
        cartElements.splice(0);
    }

    const date = new Date();

    const [validated, setValidated] = useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const value = useContext(CartContext);
    const {cartElements, total, numberProducts, removeItem} = value;
    const [orderId, setOrderId] = useState("");

    const order = (e)=>{
        e.preventDefault();

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        setValidated(true);

            const infoOrder = {
                client:{
                    email: e.target[0].value,
                    name: e.target[1].value,
                    adress: e.target[2].value,
                    city: e.target[3].value,
                    country: e.target[4].value,
                    zipCode: e.target[5].value,
                    phone: e.target[6].value,
                },
                items: cartElements,
                date: date,
                total: total()
            }

            const queryRef = collection(dataBase,"orders");
            addDoc(queryRef,infoOrder).then( result => {
                setOrderId(result.id);
                setTimeout(() => {
                    setOrderId("");
                }, 8000);
            }) 
            
    }

    return(
        <>
            <div className="NavBarGeneral pointer">
            <FontAwesomeIcon icon={faCartShopping} onClick={handleShow} className="me-2"/>
            </div>
            <Offcanvas show={show} onHide={handleClose} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div>
                    { 
                    orderId === "" ? '' :
                        <div>
                        <p className='pstyle'>Thank You! Your order has been placed.</p>
                        <p className='pstyle'>Order Number: <strong>{orderId}</strong></p>
                        <hr />
                        </div>
                        }

                    <div>
                        {
                            cartElements.map( product => {
                                return(
                                <div className='mt-3'>
                                    <div className='d-flex flex-row w-100'>
                                        <div className='w-25'>
                                            <Link to={`/item/${product.id}`}><img src={product.img} alt={product.title} className="rounded-4 w-100" /></Link>
                                        </div>
                                        <div className='w-50 ms-3'>
                                            <h4 className='h4style'>{product.title}</h4>
                                            <p className='pstyle'>Qty:{product.quantity}</p>
                                            <Button className='cartBtn h-25' size='sm' onClick={ ()=> removeItem(product.id)}>Delete</Button>
                                        </div>
                                        <div className='w-25 ms-3 d-flex align-items-end'>
                                            <p className='pstyle ms-4'>${product.total}</p>
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                        }
                        {
                        numberProducts() === 0 ? 'Your cart is empty.' :
                            <div className='mt-4'>
                                <hr/>
                                <p className='text-end pstyle'>Total ({numberProducts()} {numberProducts() <= 1 ? "item" : "items"}): <strong>${total()}</strong></p>
                                <h4 className='mt-5'>Shipping information</h4>

                                <Form noValidate validated={validated} onSubmit={order}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control required type="email" placeholder="Email" autoComplete='off'/>
                                        <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mb-1" controlId="formFullName">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control required type="text" placeholder="Full name" autoComplete='off'/>
                                    </Form.Group>
                                    <Form.Group className="mb-1" controlId="formAdress">
                                        <Form.Label>Adress</Form.Label>
                                        <Form.Control required type="text" placeholder="Adress" autoComplete='off'/>
                                    </Form.Group>
                                    <Form.Group className="mb-1" controlId="formCity">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control required type="text" placeholder="City" autoComplete='off'/>
                                    </Form.Group>
                                    <Form.Group className="mb-1" controlId="formCountry">
                                        <Form.Label>Country</Form.Label>
                                        <Form.Control required type="text" placeholder="Country" autoComplete='off'/>
                                    </Form.Group>
                                    <Form.Group className="mb-1" controlId="form ZIP code">
                                        <Form.Label>ZIP code</Form.Label>
                                        <Form.Control required type='text' inputMode='numeric' placeholder="ZIP code" autoComplete='off'/>
                                    </Form.Group>
                                    <Form.Group className="mb-1" controlId="formPhone">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control required type="text" placeholder="Phone" autoComplete='off'/>
                                    </Form.Group>

                                    <br />
                                    <Button type="submit" className='orderBtn' onClick={ ()=> cleanCart()} >Place Order</Button>
                                </Form>
                            </div>
                        }
                    </div>
                </div>

            </Offcanvas.Body>
            </Offcanvas> 
        </>
    )
}