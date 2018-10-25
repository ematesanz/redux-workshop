import React from 'react';
import Menu from '../Menu';
import { IPConsumer } from '../IPContext';

const Header = ({buttonsData, activeIndexButton, changeActiveIndex} ) => (

	<header className="header">
		<Menu buttonContents={buttonsData} activeIndexButton={activeIndexButton} changeActiveIndex={changeActiveIndex} />
		<IPConsumer>
			{(context) => (
				<span> {context.ip} </span>
			)}
		</IPConsumer>
	</header>
);

export default Header;
