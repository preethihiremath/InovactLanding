import { combineReducers } from 'redux';
import authReducer from './auth';
import { projectReducer } from './project';

export const reducers = combineReducers({
	auth: authReducer,
	projects: projectReducer,
});
