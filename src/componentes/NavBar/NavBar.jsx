import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoBite from '../../assets/svg/logo.svg';
import { Shop } from './OCShop/Shop';
import { OffCanvas } from './OffCanvas/OffCanvas';
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

import './NavBar.css';


export function NavBar() {

  const {numberProducts} =useContext(CartContext);

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" className='position-fixed w-100 NavBarGeneral'>
      <Container className='w-100'>
        <Link to='/' className='logoW'>
          <div>
            <img src={logoBite} alt="Bite logo" className='w-75'/>
          </div>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" className='w-100 position-relative z-index-2'>
          <Nav className='NavBarGeneral'>
            <Shop/>
          </Nav>
          <Nav className="me-auto">
            <OffCanvas/> 
            <Link to="/sustaintability" className='NavBarGeneral mt-2'>Sustaintability</Link>
          </Nav>
          <Nav>
          <CartWidget/> ({numberProducts()})
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

