import React from 'react';
import Button from '../Button';


const Menu = ({isVertical, buttonContents, activeIndexButton, changeActiveIndex}) => {

    const orientationClassName = isVertical ? 'vertical' : 'horizontal'
    const className = `menu menu--${orientationClassName}`;

    return (
        <div className={className}>
            { buttonContents.map(({ key, name }, index) =>
                <Button key={index} name={key} changeActiveIndex={() => changeActiveIndex(index)} active={index===activeIndexButton}> {name} </Button>)}
        </div>
    )
};

export default Menu;
