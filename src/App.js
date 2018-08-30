import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
        <div className="App">
             <Header/>
             <Sidebar/>
            <div className="content"> Content </div>
        </div>
    );
};

export default App;
