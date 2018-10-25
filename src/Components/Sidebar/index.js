import React from 'react';
import Menu from '../Menu';
import { IPConsumer } from '../IPContext';

const Sidebar = ({buttonsData, activeIndexButton, changeActiveIndex}) => (

    <div className="sidebar">
        <Menu isVertical  buttonContents={buttonsData} activeIndexButton={activeIndexButton} changeActiveIndex={changeActiveIndex} />
        <IPConsumer>
            {(context) => (
                <span> {context.ip} </span>
            )}
        </IPConsumer>
    </div>
);

export default Sidebar;
