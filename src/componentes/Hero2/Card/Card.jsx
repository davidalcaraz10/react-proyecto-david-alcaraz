import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './Card.css';

export const CardComponent = (props) => {

    return (
        <>    
            <div className="col d-flex justify-content-center">
                <div className='d-block'>
                    <a href="/">
                <Card style={{ width: '16rem' }} className="cardDesing border border-0">
                    <Card.Img variant="top" src={props.image} className="rounded-4"/>
                    <Card.Body>
                        <Card.Title className='cardTitle'>{props.title}</Card.Title>
                        <Card.Text className='cardText'>
                        {props.text}
                        </Card.Text>
                        <a href="/"><Button variant="outline-dark" className='cardBtn rounded-pill'>Shop Now</Button></a>
                    </Card.Body>
                </Card>
                </a>
                </div>
            </div>
        </>
    )
}