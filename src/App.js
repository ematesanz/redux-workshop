import React, { Component } from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Tabs from './Components/Tabs';
import Accordion from './Components/Accordion';
import MyIp from './Components/MyIp';
//import logo from './logo.svg';
import './App.css';
import { buttonsData, tabItems, accordionItems } from './data';

class App extends Component {

    state = {
        activeIndexButton: 2
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
                    <h3>{buttonsData[activeIndexButton]} - Content {activeIndexButton + 1}</h3>
                    { activeIndexButton === 0 && <Tabs activeIndex={0} items={tabItems}/> }
                    { activeIndexButton === 1 && <Accordion items={accordionItems} activeItemsLimit={3}/> }
                    { activeIndexButton === 2 && <MyIp/>}
                </div>
            </div>
        );
    }
};

export default App;
