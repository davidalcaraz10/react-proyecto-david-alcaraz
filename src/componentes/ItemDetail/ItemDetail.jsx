import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemDetail.css';

export const ItemDetail = ({item})=>{
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
                            <Button variant="outline-dark" className='cardBtn rounded-pill'>Shop Now</Button>
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