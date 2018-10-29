import React from 'react';
import './AccordionItem.css';

const AccordionItem = ({ isActive, title, onHeaderClick, children }) => {

    let className = 'accordion-item';
    if(isActive) {
        className = `${className} is-active`;
    }

    return (
        <div className={className}>
            <div className="accordion-item__header" onClick={onHeaderClick}>{title}</div>
            {isActive && <div className="accordion-item__content">{children}</div>}
        </div>
    )
};

export default AccordionItem;

