import React from 'react';
import Button from '../Button';

const Menu = ({isVertical, buttonContents, onButtonClick, activeIndexButton}) => {
    let className = 'menu';
    if (isVertical) {
        className = `${className} ${className}--vertical`;
    } else {
        className = `${className} ${className}--horizontal`;
    }

    return (
        <div className={className}>
            { buttonContents.map((btn, id)=> <Button key={id} onClick={onButtonClick} active> {btn} </Button>)}
        </div>
    )
};

export default Menu;
