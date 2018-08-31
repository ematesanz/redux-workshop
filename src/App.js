import React, { Component } from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import logo from './logo.svg';
import './App.css';
import buttonsData from './buttonsData';

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
                <div className="content"> Content {activeIndexButton + 1}</div>
            </div>
        );
    }
};

export default App;
