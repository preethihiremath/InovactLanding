import { AUTH } from '../constants/actionTypes';
import * as api from '../utils/api';
import { signinFormData, signupFormData } from '../constants/interfaceTypes';

export const signin =
	(formData: signinFormData, router: any) => async (dispatch: any) => {
		try {
			const { data } = await api.signIn(formData);
			dispatch({ type: AUTH, payload: data });
			router.push('/');
		} catch (e) {
			console.log(e);
		}
	};

export const signup =
	(formData: signupFormData, router: any) => async (dispatch: any) => {
		try {
			const { data } = await api.signUp(formData);
			dispatch({ type: AUTH, payload: data });
			router.push('/');
		} catch (e) {
			console.log(e);
		}
	};
