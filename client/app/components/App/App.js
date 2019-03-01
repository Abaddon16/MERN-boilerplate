/*
 * Doctored by: Abaddon16
 * Document Function: Main app component, takes in children componenets and they insert themselves as components
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const App = ({ children }) => (
	<>
		<main>
			{children}
		</main>
		<Link to='/creatures'>Creatures</Link>
	</>
);

export default App;
