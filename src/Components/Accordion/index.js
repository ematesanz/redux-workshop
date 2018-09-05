import React from 'react';
import AccordionItem from './../AccordionItem';

import './Accordion.css';

const Accordion = ({ items }) => (

    <div className="accordion">
        {items.map(({ title, content }) =>
            <AccordionItem isActive title={title} onHeaderClick>
                <p>{content}</p>
            </AccordionItem>
         )}
    </div>
);

export default Accordion;

