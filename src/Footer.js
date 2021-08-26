import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <p>Let's Talk! <strong>contact@spacelender.com</strong></p>
            <button>Contact Us</button>
            <div className='social'>
                <i class="fa fa-twitter" aria-hidden="true" />
                <i class="fa fa-facebook" aria-hidden="true" />
                <i class="fa fa-instagram" aria-hidden="true" />
            </div>
            <p><i class="fa fa-copyright" aria-hidden="true" />
                Copyrights All Rights Reserved</p>
        </div>
    )
}

export default Footer;
