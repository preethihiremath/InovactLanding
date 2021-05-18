import { Dispatch } from 'react';
import {
	START_LOADING,
	STOP_LAODING,
	FETCH_PROJECT_ALL,
	FETCH_PROJECT_BY_ID,
	FETCH_PROJECT_BY_SEARCH,
	CREATE_PROJECT,
	UPDATE_PROJECT,
	LIKE_PROJECT,
	COMMENT_PROJECT,
	DELETE_PROJECT,
} from '../constants/actionTypes';
import { actiontype } from '../constants/interfaceTypes';
import * as api from '../utils/api';

export const getProject =
	(id: number) => async (dispatch: Dispatch<actiontype>) => {
		try {
			dispatch({ type: START_LOADING, payload: undefined });

			const { data } = await api.fetchProject(id);
			dispatch({ type: FETCH_PROJECT_BY_ID, payload: data });
			dispatch({ type: STOP_LAODING, payload: undefined });
		} catch (e) {
			console.log(e);
		}
	};

export const getProjects =
	(id: number) => async (dispatch: Dispatch<actiontype>) => {
		try {
			dispatch({ type: START_LOADING, payload: undefined });

			const { data } = await api.fetchProjects();
			dispatch({ type: FETCH_PROJECT_ALL, payload: data });
			dispatch({ type: STOP_LAODING, payload: undefined });
		} catch (e) {
			console.log(e);
		}
	};

export const createProject =
	(ProjectData: object, history: History) =>
	async (dispatch: Dispatch<actiontype>) => {
		try {
			dispatch({ type: START_LOADING, payload: undefined });

			const { data } = await api.createProject(ProjectData);
			dispatch({ type: CREATE_PROJECT, payload: data });
			dispatch({ type: STOP_LAODING, payload: undefined });
		} catch (e) {
			console.log(e);
		}
	};
