import React from 'react';
import Menu from '../Menu';

const Sidebar = ({buttonsData, activeIndexButton, changeActiveIndex}) => (

    <div className="sidebar">
        <Menu isVertical  buttonContents={buttonsData} activeIndexButton={activeIndexButton} changeActiveIndex={changeActiveIndex} />
    </div>
);

export default Sidebar;
