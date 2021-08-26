import React from 'react';
import './navbar.css';
import logo from './images/logo.png';

function Navbar() {
    return (
        <nav className='navbar' >
            <div className='logo'><img src={logo} alt='logo' /></div>
            <ul className='navlist'>
                <li>List Your Space</li>
                <li>Collection</li>
                <li>Contact</li>
                <li>Login</li>
            </ul>
        </nav>
    )
}

export default Navbar
