//? This is the boilerplate for setting up projects page, with redux and hooks

import * as React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../../actions/project';

const Projects = (state: any): JSX.Element => {
	const dispatch = useDispatch();
	const { projects, isLoading } = useSelector(
		(state: RootStateOrAny) => state.projects
	);
	React.useEffect(() => {
		dispatch(getProjects());
	}, [dispatch]);

	return <div>{isLoading ? 'yes' : 'no'}</div>;
};

export default Projects;
