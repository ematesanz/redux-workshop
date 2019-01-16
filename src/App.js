import React, { Component } from 'react';

import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Content from './Components/Content';
import Tab from './Components/Tab';
import Accordion from './Components/Accordion';
import { IPProvider, IPConsumer } from './Components/IPContext';
import { MenuProvider, MenuConsumer } from './Components/MenuContext';
import { buttonItems } from './data';
import './App.css';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import store from './modules/ReduxStore'

class App extends Component {

	render() {
		return (
			<MenuProvider>
			<IPProvider>
			<Provider store={store}>

				<div className="App">
					<Header buttonsData={buttonItems} />
					<Sidebar buttonsData={buttonItems} />
					<Content buttonsData={buttonItems} />
				</div>
			</Provider>
			</IPProvider>
		</MenuProvider>
		);
	}
};

export default App;