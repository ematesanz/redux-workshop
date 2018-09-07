import React, { Component } from 'react';
import AccordionItem from './../AccordionItem';

import './Accordion.css';

class Accordion extends Component {

    static defaultProps = {
        activeItemsLimit: 0
    }

    state = {
        activeIndexes: []
    }

    setActiveIndex = (activeIndex) => () => {
        let activeIndexes = this.state.activeIndexes.slice();
        const { activeItemsLimit } = this.props;
        const indexPosition = activeIndexes.indexOf(activeIndex);
        const isAlreadyActive = indexPosition >= 0;

        if (isAlreadyActive) {
            activeIndexes.splice(indexPosition, 1)
        } else {
            activeIndexes.push(activeIndex);
            if (activeItemsLimit !== 0 && activeIndexes.length > activeItemsLimit) {
                activeIndexes.shift();
            }
        }

        return this.setState({ activeIndexes })
    }

    isActiveIndex(index) {
        // return this.state.activeIndexes.indexOf(index) > -1
        return this.state.activeIndexes.includes(index)
    }

    render() {
        const { items } = this.props;
        return (
            <div className="accordion">
                { items.map(({ title, content }, index) =>
                    <AccordionItem
                        key={index}
                        title={title}
                        onHeaderClick={this.setActiveIndex(index)}
                        isActive={this.isActiveIndex(index)}
                    >
                        {content}
                    </AccordionItem>
                 )}
            </div>
        )
    }
}

export default Accordion;
