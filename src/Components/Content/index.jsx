import React from 'react';
import Menu from '../Menu';
import { IPConsumer } from '../IPContext';
import { MenuConsumer } from '../MenuContext';
import Tab from '../Tab';
import Sidebar from '../Sidebar';
import Accordion from '../Accordion';

import { buttonItems, tabItems, accordionItems } from '../../data';


const Content = ({ buttonsData }) => (
	<MenuConsumer>
		{(menuContext) => {
			const { activeIndex } = menuContext;
			return (
				<div className="content">
					<h3>{buttonItems[activeIndex].name} - Content {activeIndex + 1}</h3>
					{ activeIndex === 0 && <Tab activeIndex={0} items={tabItems}/> }
					{ activeIndex === 1 && <Accordion items={accordionItems} activeItemsLimit={3}/> }
					{ activeIndex === 2 && 
					<IPConsumer>
						{(ipContext) => (
							<input type="text" name="input" placeholder={ipContext.ip} />
						)}
					</IPConsumer>
					} 
				</div>
			)}
		}
</MenuConsumer>
);

export default Content;
