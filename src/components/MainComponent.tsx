// This is the component we can inport in App.tsx so that we dont have to
// set up routing in App.tsx

import React from 'react';
import Landing from '../pages/Landing';
import TestButtons from './test';

const MainComponent : React.FunctionComponent = (): JSX.Element => {
	return (
		<div>
			<Landing />
			<TestButtons/>
		</div>
	);
};

export default MainComponent;
