// This is the component we can inport in App.tsx so that we dont have to
// set up routing in App.tsx

import React from 'react';
import Landing from '../pages/Landing';

const MainComponent : React.FunctionComponent = (): JSX.Element => {
	return (
		<div>
			<Landing />
		</div>
	);
};

export default MainComponent;
