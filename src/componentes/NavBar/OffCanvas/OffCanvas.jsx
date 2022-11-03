import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import './OffCanvas.css';

export function OffCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Link onClick={handleShow} className="aboutColor me-4">About <FontAwesomeIcon icon={faArrowDown} className="arrowIcon"/></Nav.Link>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body className='mt-5'>
            <div className='w-75 mt-5'>
                <a href="/" className='aDecoration'><h3><strong>Who We Are</strong></h3></a>
                <a href="/" className='aDecoration'><h3><strong>Ingredients</strong></h3></a>
                <Link to="/" className='aDecoration'><h3><strong>Sustainability</strong></h3></Link>
                <a href="/" className='aDecoration'><h3><strong>FAQ</strong></h3></a>
                <a href="/" className='aDecoration'><h3><strong>Blog</strong></h3></a>
            </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
