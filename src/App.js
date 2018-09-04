import React, { Component } from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Tabs from './Components/Tabs';
import logo from './logo.svg';
import './App.css';
import buttonsData from './buttonsData';

const tabItems = [
    {title: 'Tab 1', content: 'Content Tab 1'},
    {title: 'Tab 2', content: 'Content Tab 2'}
];


class App extends Component {

    state = {
        activeIndexButton: 0
    };

    changeActiveIndex = (activeIndexButton) => {
        this.setState({activeIndexButton})
    }

    render() {
        const {activeIndexButton} = this.state;
        return (
            <div className="App">

                <Header buttonsData={buttonsData} activeIndexButton={activeIndexButton} changeActiveIndex={this.changeActiveIndex} />
                <Sidebar buttonsData={buttonsData} activeIndexButton={activeIndexButton} changeActiveIndex={this.changeActiveIndex} />
                <div className="content">
                    Content {activeIndexButton + 1}
                    <Tabs activeIndex={0} items={tabItems}/>
                </div>
            </div>
        );
    }
};

export default App;
