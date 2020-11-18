import React from 'react';

import logo from "../../assets/logo-white.png";
import {AiOutlineSearch} from "react-icons/ai";

import './styles.scss'

const Header = () => {

    return(
        <header className='home-header'>
            <div className="header-logo">
                <img
                    alt="Todoist"
                    src={logo}
                />
            </div>
            <div className='header-search'>
                <AiOutlineSearch/>
                <input type='text' placeholder='Quick find' spellCheck='false'/>
            </div>
            <div className='header-user'>
                Hi, Ivan Krupskyi!
            </div>
        </header>
    )
}

export default Header;