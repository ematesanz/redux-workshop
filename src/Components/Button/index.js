import React from 'react';
import './Button.css';

const Button = ({active, onClick, children}) => {

    let className = 'button';
    if (active) {
        className = `${className} ${className}--active`;
    }

    return <button className={className} onClick={onClick}>{children}</button>;
}

export default Button;
