import React from 'react';
import Menu from '../Menu';

import buttonsData from '../../buttonsData';

const handleClick = () => console.log('Click Sidebar');

const Sidebar = () => (
    <div className="sidebar">
        <Menu isVertical  buttonContents={buttonsData} onButtonClick={handleClick}/>
    </div>
);

export default Sidebar;
