import React from 'react';
import Menu from '../Menu';

import buttonsData from '../../buttonsData';

const handleClick = () => console.log('Click Header');

const Header = () => (
    <header className="header">
        <Menu buttonContents={buttonsData} onButtonClick={handleClick}/>
    </header>
);

export default Header;
