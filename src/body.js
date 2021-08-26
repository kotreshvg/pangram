import React, { Fragment } from 'react';
import './body.css';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import about1 from './images/abouth1.png';
import about2 from './images/abouth2.png';
import about3 from './images/aboutvertical.png';
import carosal1 from './images/carosal1.png';
import carosal2 from './images/carosal2.png';

function Body() {
    return (
        <Fragment>
            <div id='name_tag'>Categories</div>
            <div className='categories'>
                <div className='element'>
                    <img src={img1} alt=''></img>
                    <h4>Occassion</h4>
                </div>
                <div className='element'>
                    <img src={img2} alt=''></img>
                    <h4>Venue</h4>
                </div>
                <div className='element'>
                    <img src={img3} alt=''></img>
                    <h4>Locations</h4>
                </div>
            </div>
            <div className='About'>
                <p>About Us</p>
                <div>
                    <div className='collage'>
                        <img src={about1} alt='' />
                        <img src={about2} alt='' />
                    </div>
                    <div className='collage long'><img src={about3} alt='' /></div>
                    <div className='text'>
                        <h6>Unique spaces</h6>
                        <p>Every day we uncover new, creative spaces - from neighborhood galleries to hidden rooftops and beyond.</p>
                        <h6>Honest pricing</h6>
                        <p>Our spaces are priced to fit your budget. Pay by the hour without worrying about hidden fees.</p>
                        <h6>Smooth bookings</h6>
                        <p>No more messy contracts. We build the tools to make booking a space as easy as the click of a button.</p>
                    </div>
                </div>
            </div>
            <div className='discover'>
                <p>Discover</p>
                <div className='image_stack'>
                    <div className='corosal'>
                        <img src={carosal1}></img>
                        <p>Party Collection</p>
                    </div>
                    <div className='corosal'>
                        <img src={carosal2}></img>
                        <p>Conference Collection</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Body
