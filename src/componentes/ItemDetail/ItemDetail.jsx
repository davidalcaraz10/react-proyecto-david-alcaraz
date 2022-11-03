import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState} from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import './ItemDetail.css';

export const ItemDetail = ({item, dflt, stock}) => {

    const {addProduct} = useContext(CartContext)

    const addItem = (numberProduct) => {
        addProduct(item, numberProduct)
    }

    const [count, setCount] = useState(dflt);

    const minus = () => {
        if(count > 1) {
            setCount(count - 1)
        }
    }
    
    const plus = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }


    return(
        <>
            <Container>
                <div className='d-flex flex-row justify-content-around align-items-center'>
                    <Card style={{ width: '16rem'}} className="cardDesing border border-0 d-flex justify-content-center">
                        <Card.Img variant="top" src={item.img} className="rounded-4"/>
                        <Card.Body>
                            <Card.Title className='cardTitle'>{item.title}</Card.Title>
                            <Card.Text className='cardText'>
                                {item.text}
                            </Card.Text>
                            <div className='d-flex flex-row align-items-center'>
                                <FontAwesomeIcon type='button' icon={faMinus} onClick={minus} className="me-2 colorbt"></FontAwesomeIcon>
                                <Button disabled={stock === 0} variant="outline-dark" className='cardBtn rounded-pill ' onClick={ ()=> addItem(count)} >Add To Cart {count === 1 ? '' : `(${count})`}</Button>
                                <FontAwesomeIcon type='button' icon={faPlus} onClick={plus} className="ms-2 pointer colorbt"></FontAwesomeIcon>
                            </div>
                            
                        </Card.Body>
                    </Card>
                    
                    <div className='w-50'>
                        <h1 className='cardTitle'>{item.title}</h1>
                        <p className='cardText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dignissimos magnam perferendis architecto officia, quasi voluptatum distinctio error mollitia omnis hic repudiandae inventore laudantium itaque, expedita et possimus! Consequatur libero distinctio eos officia repellat. Ab, quaerat deserunt? Error, iste? Debitis praesentium vel molestiae dicta laborum illo exercitationem aperiam natus repellat.</p>
                    </div>
                </div>
            </Container>
        </>
    )
}

