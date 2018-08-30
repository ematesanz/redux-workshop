import React from 'react';
import Button from '../Button';

const Menu = (props) => {
    let className = 'Menu';
    if (props.isVertical) {
        className = `${className} ${className}--vertical`;
    } else {
        className = `${className} ${className}--horizontal`;
    }

    return (
        <div className={className}>
            <Button/>
            <Button/>
            <Button/>
            <Button disabled/>
        </div>
    )
};

export default Menu;
