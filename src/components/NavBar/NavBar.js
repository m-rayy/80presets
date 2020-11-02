import React from 'react';
import Logo from '../../img/80presets.com_logo.png';
import './NavBar.css';

const NavBar = () => {
    return(
        <header className='NavBar pa2'>
            <div className='Logo'>
                <img alt='logo' src={Logo}/>
            </div>
            <nav>
                <p>Insert SLOGAN here</p>
            </nav>
        </header>
    )
}

export default NavBar;
