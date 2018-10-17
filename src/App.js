import React, { Component } from 'react';

import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Tab from './Components/Tab';
import Accordion from './Components/Accordion';
import MyIp from './Components/MyIp';
import WithIp from './Components/WithIp';

import './App.css';

import { buttonItems, tabItems, accordionItems } from './data';

class App extends Component {

    state = {
        activeIndexButton: 0
    };

    changeActiveIndex = (activeIndexButton) => {
        this.setState({activeIndexButton})
    }

    render() {
        const { activeIndexButton } = this.state;

        return (
            <div className="App">

                <Header buttonsData={buttonItems} activeIndexButton={activeIndexButton} changeActiveIndex={this.changeActiveIndex} />
                <Sidebar buttonsData={buttonItems} activeIndexButton={activeIndexButton} changeActiveIndex={this.changeActiveIndex} />
                <div className="content">
                    <h3>{buttonItems[activeIndexButton].name} - Content {activeIndexButton + 1}</h3>
                    { activeIndexButton === 0 && <Tab activeIndex={0} items={tabItems}/> }
                    { activeIndexButton === 1 && <Accordion items={accordionItems} activeItemsLimit={3}/> }
                    { activeIndexButton === 2 && <MyIp/>}

                    <WithIp>{ ip => (
                    <div>
                        <MyIp ip={ip}/>
                        <MyIp ip={ip}/>
                        <MyIp ip={ip}/>
                        <MyIp ip={ip}/>
                    </div>)}
                    </WithIp>
                </div>
            </div>
        );
    }
};

export default App;
