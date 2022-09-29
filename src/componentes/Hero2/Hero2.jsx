import { CardComponent } from './Card/Card';
import img11 from '../../assets/images/img11.jpg'
import img12 from '../../assets/images/img12.jpg'
import img13 from '../../assets/images/img13.jpg'
import img14 from '../../assets/images/img14.jpg'

import './Hero2.css';

export const  Hero2 = () => {


    return(
        <>
            <div className="container-fluid backgroundCard">
                <div className='d-flex flex-column '>
                    <div className='d-flex justify-content-center align-items-center w-100'>
                        <h3 className='w-75 mt-5 text-center titleStyle'>We make your daily routine more sustainable with products that are plastic-free, cruelty-free and made with clean ingredients.</h3>
                    </div>
                </div>

                <div className='row justify-content-center m-5'>
                    <CardComponent image={img11} title="Toothpaste Bits" text="FROM $8 / MONTH"/>
                    <CardComponent image={img12} title="Body Balm" text="FROM $7 / MONTH"/>
                    <CardComponent image={img13} title="Deodorant" text="FROM $8 / MONTH"/>
                    <CardComponent image={img14} title="Whitening Gel" text="FROM $5 / MONTH"/>
                </div>

            </div>
        </>
    )
}

