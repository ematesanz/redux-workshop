import React from 'react';
import Header from './Components/Menu';
import Sidebar from './Components/Menu';
import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="header"> <Header/> </div>
            <div className="sidebar"> <Sidebar/> </div>
            <div className="content"> Content </div>
        </div>
    );
};

export default App;
