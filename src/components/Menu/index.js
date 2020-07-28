import React from 'react';
import Logo from '../../assets/img/logo.png';
import './style.css';
import Button from '../Button';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="AppFlix"/>
            </a>
            <Button as="a" className="ButtonLink" href="/">Novo Vídeo</Button>
        </nav>
    );
}

export default Menu;