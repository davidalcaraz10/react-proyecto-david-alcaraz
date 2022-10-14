import Button from 'react-bootstrap/Button';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.png';
import img3 from '../../assets/images/img3.png';
import img4 from '../../assets/images/img4.png';
import img5 from '../../assets/images/img5.png';
import img6 from '../../assets/images/img6.png';
import img7 from '../../assets/images/img7.png';
import img8 from '../../assets/images/img8.png';
import img9 from '../../assets/images/img9.png';
import img10 from '../../assets/images/img10.png';


import './Hero.css';


export const Hero = () => {

    return (
        <>
            <div className='container-fluid'>
                <div className='heroImg d-flex'>
                    <img src={img1} alt="bite toothpaste" className='w-100 heroImg'/>
                    <div className='heroTitle position-absolute d-flex flex-column justify-content-center align-self-center'>
                        <div className='container'>
                            <h1 className='heroTitle'>
                                <span><strong>Meet your routine, reinvented</strong></span>
                            </h1>
                            <div className='heroSubTitle'>
                                <p>The only plastic-free and clean way to replace the paste you've used your whole life.</p>
                            </div>
                            <div className='heroBtn'>
                                <a href="#shop" className='abtn'><Button variant="outline-dark" className='hBtn d-flex justify-content-center'>Shop Now</Button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='d-none d-md-block'>
                <div className='container-fluid d-flex flex-raw justify-content-evenly align-items-center divColor'>
                    <div>
                        <a href="/"><img src={img2} alt="" className='brandImg'/></a>
                    </div>
                    <div>
                        <a href="/"><img src={img3} alt="" className='brandImg'/></a>
                    </div>
                    <div>
                        <a href="/"><img src={img4} alt="" className='brandImg'/></a>
                    </div>
                    <div>
                        <a href="/"><img src={img5} alt="" height={20} className='brandImg'/></a>
                    </div>
                    <div>
                        <a href="/"><img src={img6} alt="" className='brandImg'/></a>
                    </div>
                    <div>
                        <a href="/"><img src={img7} alt="" className='brandImg'/></a>
                    </div>
                    <div>
                        <a href="/"><img src={img8} alt="" className='brandImg'/></a>
                    </div>
                    <div>
                        <a href="/"><img src={img9} alt="" className='brandImg'/></a>
                    </div>
                    <div>
                        <a href="/"><img src={img10} alt="" className='brandImg'/></a>
                    </div>
                </div>
            </div>
            
        </>
    );
}