import React from 'react';
import Button from '../Button';


const Menu = ({isVertical, buttonContents, activeIndexButton, changeActiveIndex}) => {

    const orientationClassName = isVertical ? 'vertical' : 'horizontal'
    const className = `menu menu--${orientationClassName}`;

    return (
        <div className={className}>
            { buttonContents.map((btn, index)=>
                <Button key={index} onClick={() => changeActiveIndex(index)} active={index===activeIndexButton}> {btn} </Button>)}
        </div>
    )
};

export default Menu;
