import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoBite from '../../assets/svg/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { OffCanvas } from './OffCanvas/OffCanvas';

import './NavBar.css';


export function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" className='position-fixed w-100 NavBarGeneral'>
      <Container className='w-100'>
        <a href="/" className='logoW'>
          <div>
            <img src={logoBite} alt="Bite logo" className='w-75'/>
          </div>
        </a>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" className='w-100 position-relative z-index-2'>
        <Nav.Link href="#shop" className='NavBarGeneral me-4'>Shop</Nav.Link>
          <Nav className="me-auto">
            <OffCanvas/>           
            <Nav.Link href="#sustaintability" className='NavBarGeneral'>Sustaintability</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#cart" className='NavBarGeneral'><FontAwesomeIcon icon={faCartShopping} className="me-2"/>( )</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
