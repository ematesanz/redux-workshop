import React, {Component} from 'react';
import './Tab.css';

class Tab extends Component {

    static defaultProps = {
        activeIndex: 0
    }

    state = {
        activeIndex: this.props.activeIndex
    };

    render() {
        const { items } = this.props;
        const { activeIndex } = this.state;

        return (
            <div>
                <ul className="tab-header">{items.map(({title}, index) =>
                    <li
                        className="tab-item"
                        key={index}
                        index={index}
                        onClick={() => this.setState({activeIndex:index})}
                    >
                            {title}
                    </li>
                )}</ul>
                <div className="tab-content"> {this.props.items[activeIndex].content} </div>
            </div>
        )
    }
}

export default Tab;

