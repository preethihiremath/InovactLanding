// This is the component we can inport in App.tsx so that we dont have to
// set up routing in App.tsx

import React from 'react';
import Landing from '../pages/Landing';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TestButtons from './test';
import Login from './Login';
const MainComponent : React.FunctionComponent = (): JSX.Element => {
	return (
		<div>
				<Router>
			<Route exact path='/' component={Landing} />
			<Route path="/" component={Login} />
			</Router>
		
		</div>
	);
};

export default MainComponent;
