import React, { Component } from 'react';

import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Content from './Components/Content';
import Tab from './Components/Tab';
import Accordion from './Components/Accordion';
import { IPProvider, IPConsumer } from './Components/IPContext';
import { MenuProvider, MenuConsumer } from './Components/MenuContext';
import './App.css';

import { buttonItems } from './data';

class App extends Component {

	render() {
		return (
			<MenuProvider>
			<IPProvider>
				<div className="App">
					<Header buttonsData={buttonItems} />
					<Sidebar buttonsData={buttonItems} />
					<Content buttonsData={buttonItems} />
				</div>
			</IPProvider>
			</MenuProvider>
		);
	}
};

export default App;