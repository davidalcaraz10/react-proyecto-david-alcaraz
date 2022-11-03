import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";

import './Item.css';

export const Item = ({item}) => {

    return(
        <>
            <div>
                <Link to={`/item/${item.id}`}>
                    <Card style={{ width: '16rem'}} className="cardDesing border border-0 d-flex justify-content-center">
                        <Card.Img variant="top" src={item.img} className="rounded-4"/>
                        <Card.Body>
                            <Card.Title className='cardTitle'>{item.title}</Card.Title>
                            <Card.Text className='cardText'>
                                {item.text}
                            </Card.Text>
                            <Button variant="outline-dark" className='cardBtn rounded-pill'>View Detail</Button>
                        </Card.Body>
                    </Card>
                </Link>
            </div>
        </>
    )
}