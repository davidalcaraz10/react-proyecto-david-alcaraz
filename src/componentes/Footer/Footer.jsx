import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './Footer.css'

export const Footer = () => {
    return (
        <>
            <section className='social p-5'>
                <hr />
                <div className='flex-lg-column justify-content-between pt-5'>
                    <div className='ms-3 d-flex align-items-start gap-3'>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <div className='text-start'>
                                <h5>SHOP</h5>
                            </div>
                            <div>
                                <ul>
                                    <li>All Products</li>
                                    <li>Oral Care</li>
                                    <li>Personal Care</li>
                                    <li>Gift Sets</li>
                                </ul>
                            </div>
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <div>
                                <h5>ABOUT</h5>
                            </div>
                            <div>
                                <ul>
                                    <li>Ingredients</li>
                                    <li>Sustainability</li>
                                    <li>About Us</li>
                                    <li>Blog</li>
                                    <li>FAQ</li>
                                </ul>
                            </div>
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <div>
                                <h5>MORE</h5>
                            </div>
                            <div>
                                <ul>
                                    <li>Wholesale</li>
                                    <li>Store Locator</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className='d-flex justify-content-end align-items-end me-4'>
                        <a href="https://github.com/davidalcaraz10" target="_blank" rel="noreferrer noopener" className='iconGH'><FontAwesomeIcon icon={faFacebook} className='iconSocial' /></a>
                        <a href="https://github.com/davidalcaraz10" target="_blank" rel="noreferrer noopener" className='iconGH'><FontAwesomeIcon icon={faInstagram} className='iconSocial' /></a>
                        <a href="https://github.com/davidalcaraz10" target="_blank" rel="noreferrer noopener" className='iconGH'><FontAwesomeIcon icon={faTwitter} className='iconSocial' /></a>
                    </div>
                </div>
                <hr className='ps-5'/>
            </section>

            <div className='footer d-flex justify-content-around align-items-center'> 
                <p>Noviembre 2022</p>
                <p className='h2f'>DAVID ALCARAZ</p>
                <a href="https://github.com/davidalcaraz10" target="_blank" rel="noreferrer noopener" className='iconGH'><FontAwesomeIcon icon={faGithub} /></a>
                <p className='h3f'>Curso react</p>
                <p>CoderHouse</p>
            </div>
        </>
    )
}