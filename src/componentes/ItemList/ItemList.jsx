import { Item } from '../Item/Item';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './ItemList.css';

export const ItemList = ({items}) => {

    return (
        <>    
            <div className="d-flex justify-content-center">
                <Row xs={1} md={4} className="g-0">
                    {
                        items.map( product => (
                            <Item key={product.id} item={product}/>
                        ))
                    }  
                </Row>
            </div>
        </>
    )
}