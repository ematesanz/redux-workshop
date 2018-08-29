import React from 'react';
import Button from '../Button';

const Menu = (props) => {
    const orientation = `menu--${props.orientation}`;

    return (
        <div className={orientation}>
            <Button active="true"/>
            <Button/>
            <Button/>
            <Button/>
        </div>
    )
}

export default Menu;
