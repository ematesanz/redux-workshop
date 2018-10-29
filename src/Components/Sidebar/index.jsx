import React from 'react';
import Menu from '../Menu';
import { IPConsumer } from '../IPContext';

const Sidebar = ({ buttonsData }) => (

    <div className="sidebar">
        <Menu isVertical  buttonContents={buttonsData} />
        <IPConsumer>
            {(context) => (
                <span> {context.ip} </span>
            )}
        </IPConsumer>
    </div>
);

export default Sidebar;
