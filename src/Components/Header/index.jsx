import React from 'react';
import Menu from '../Menu';
import { IPConsumer } from '../IPContext';

const Header = ({buttonsData} ) => (

	<header className="header">
		<Menu buttonContents={buttonsData} />
		<IPConsumer>
			{(context) => (
				<span> {context.ip} </span>
			)}
		</IPConsumer>
	</header>
);

export default Header;
