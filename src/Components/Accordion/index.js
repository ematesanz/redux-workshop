import React, { Component } from 'react';
import AccordionItem from './../AccordionItem';

import './Accordion.css';

class Accordion extends Component {

    state = {
        activeIndex: null
    }

    setActiveIndex(activeIndex) {
        return () => this.setState({activeIndex})
    }

    render() {
        const { activeIndex } = this.state;
        const { items } = this.props;

        return (
            <div className="accordion">
                { items.map(({ title, content }, index) =>
                    <AccordionItem
                        key={index}
                        title={title}
                        onHeaderClick={this.setActiveIndex(index)}
                        isActive={index === activeIndex}
                    >
                        {content}
                    </AccordionItem>
                 )}
            </div>
        )
    }
}

export default Accordion;

