import { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import {
	START_LOADING,
	STOP_LAODING,
	FETCH_PROJECT_ALL,
	FETCH_PROJECT_BY_ID,
	CREATE_PROJECT,
} from '../constants/actionTypes';
import { actiontype, project } from '../constants/interfaceTypes';
import * as api from '../utils/api';

export const getProject =
	(id: number) => async (dispatch: Dispatch<actiontype>) => {
		try {
			dispatch({ type: START_LOADING, payload: null });
			const data: AxiosResponse<project> = await api.fetchProject(id);
			dispatch({ type: FETCH_PROJECT_BY_ID, payload: data });
			dispatch({ type: STOP_LAODING, payload: null });
		} catch (e) {
			console.log(e);
		}
	};

export const getProjects = () => async (dispatch: Dispatch<actiontype>) => {
	try {
		dispatch({ type: START_LOADING, payload: null });
		const { data }: AxiosResponse<project[]> = await api.fetchProjects();
		dispatch({ type: FETCH_PROJECT_ALL, payload: data });
		dispatch({ type: STOP_LAODING, payload: null });
	} catch (e) {
		console.log(e);
	}
};

export const createProject =
	(ProjectData: object, history: History) =>
	async (dispatch: Dispatch<actiontype>) => {
		try {
			dispatch({ type: START_LOADING, payload: null });

			const { data }: AxiosResponse<project> = await api.createProject(
				ProjectData
			);
			dispatch({ type: CREATE_PROJECT, payload: data });
			dispatch({ type: STOP_LAODING, payload: null });
			history.pushState('', '', `/project/:${data.id}`);
		} catch (e) {
			console.log(e);
		}
	};
