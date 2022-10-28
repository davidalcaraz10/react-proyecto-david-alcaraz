import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';

import './ItemDetail.css';

export const ItemDetail = ({item, initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial);

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
    console.log(count);

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
                            {/* <FontAwesomeIcon type='button' icon={faMinus} onClick={minus} className="me-2 "></FontAwesomeIcon>
                            <span>pieces: {pieces}</span>
                            <FontAwesomeIcon type='button' icon={faPlus} onClick={plus} className="ms-2 pointer"></FontAwesomeIcon> */}
                            <button onClick={minus}>-</button>
                            <span>pieces: {count}</span>
                            <button onClick={plus}>+</button>
                            <Button disabled={stock === 0} variant="outline-dark" className='cardBtn rounded-pill' onClick={ ()=> onAdd(count)}>Add To Cart</Button>
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

