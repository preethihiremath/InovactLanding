import {
	COMMENT_PROJECT,
	CREATE_PROJECT,
	DELETE_PROJECT,
	FETCH_PROJECT_ALL,
	FETCH_PROJECT_BY_ID,
	FETCH_PROJECT_BY_SEARCH,
	LIKE_PROJECT,
	UPDATE_PROJECT,
} from '../constants/actionTypes';
import { actiontype } from '../constants/interfaceTypes';

//? this will be done when get the request
// interface projectInitialState {}

export const projectReducer = (state: any, action: actiontype | any) => {
	switch (action.type) {
		case 'START_LOADING':
			return { ...state, isLoading: true };
		case 'END_LOADING':
			return { ...state, isLoading: false };
		case FETCH_PROJECT_ALL:
			return { ...state, projects: action.payload };
		case FETCH_PROJECT_BY_ID:
			return { ...state, projects: action.payload };
		case FETCH_PROJECT_BY_SEARCH:
			return { ...state, projects: action.payload };
		case LIKE_PROJECT:
			return {
				...state,
				projects: state.projects.map((project: any) =>
					project.id === action.payload!.id ? action.payload : project
				),
			};
		case COMMENT_PROJECT:
			return {
				...state,
				projects: state.projects.map((project: any) =>
					project.id === action.payload!.id ? action.payload : project
				),
			};
		case CREATE_PROJECT:
			return { ...state, projects: [...state.projects, action.payload] };
		case UPDATE_PROJECT:
			return {
				...state,
				projects: state.projects.map((project: any) =>
					project.id === action.payload.id ? action.payload : project
				),
			};
		case DELETE_PROJECT:
			return {
				...state,
				projects: state.projects.filter(
					(project: any) => project.id !== action.payload
				),
			};
	}
};
