import React from 'react';
import './canvas.css';
import canvas from './images/canvas.jpg';

function Canvas() {
    return (
        <div className='entry_page'>
            <img className='canvas_image' src={canvas} alt='' />
            <div className='overlay'>
                <p>Celebrate your next party with us here</p>
                <ul>
                    <li>
                        <div>OCCASSION</div>
                        <div>What kind of event ?</div>
                    </li>
                    <li>
                        <div>LOCATION</div>
                        <div>Where ?</div>
                    </li>
                    <li>
                        <div>VENUE</div>
                        <div>party or Conference ?</div>
                    </li>
                    <li>
                    <i class="fa fa-search" aria-hidden="true"></i>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Canvas
