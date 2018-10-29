import React from 'react';
import Button from '../Button';
import { MenuConsumer } from '../MenuContext';

import './Menu.css';

const Menu = ({isVertical, buttonContents, activeIndexButton, changeActiveIndex}) => {

	const orientationClassName = isVertical ? 'vertical' : 'horizontal'
	const className = `menu menu--${orientationClassName}`;

	return (
		<MenuConsumer>
			{(menuContext) =>  {
				const { activeIndex, updateIndex } = menuContext;

				return (
					<div className={className}>
						{ buttonContents.map(({ key, name }, index) =>
								<Button key={index} name={key} changeActiveIndex={() => updateIndex(index)} active={index===activeIndex}> {name} </Button>)}
					</div>
				)}
			}
		</MenuConsumer>
	)
};

export default Menu;
