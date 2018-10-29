import React from 'react';
import './Button.css';

const Button = ({ active, changeActiveIndex, name, children }) => {

    let className = 'button';
    if (active) {
        className = `${className} ${className}--active`;
    }

    return <button className={className} name={name} onClick={changeActiveIndex}>{children}</button>;
}

export default Button;
