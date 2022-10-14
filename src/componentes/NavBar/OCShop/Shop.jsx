import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import './Shop.css';

export function Shop() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Link onClick={handleShow} className="aboutColor me-4">Shop <FontAwesomeIcon icon={faArrowDown} className="arrowIcon"/></Nav.Link>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body className='mt-5'>
            <div className='w-75 mt-5'>
                <a href="/" className='aDecoration'><h3><strong>Toothpaste</strong></h3></a>
                <a href="/" className='aDecoration'><h3><strong>Body Balm</strong></h3></a>
                <a href="/" className='aDecoration'><h3><strong>Deodorant</strong></h3></a>
                <a href="/" className='aDecoration'><h3><strong>Whitening Gel</strong></h3></a>
            </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}