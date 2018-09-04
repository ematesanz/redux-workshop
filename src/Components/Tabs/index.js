import React, {Component} from 'react';
import './Tabs.css';

class Tabs extends Component {

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
                <ul className="tabs-header">{this.props.items.map(({title}, index) =>
                    <li
                        className="tabs-item"
                        key={index}
                        index={index}
                        onClick={() => this.setState({activeIndex:index})}>
                            {title}
                    </li>
                )}</ul>
                <div className="tabs-content"> {this.props.items[activeIndex].content} </div>
            </div>
        )
    }
}

export default Tabs;

