import React from 'react';
import Menu from '../Menu';

const Header = ({buttonsData, activeIndexButton, changeActiveIndex} ) => (

    <header className="header">
        <Menu buttonContents={buttonsData} activeIndexButton={activeIndexButton} changeActiveIndex={changeActiveIndex} />
    </header>
);

export default Header;
