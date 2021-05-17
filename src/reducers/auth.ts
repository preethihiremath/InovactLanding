import { Action } from 'redux';
import * as actionType from '../constants/actionTypes';

interface authState {
	authData: object | null;
	loading: boolean;
	errors: object | null;
}

const initialState: authState = {
	authData: null,
	errors: null,
	loading: false,
};

interface authType {
	type: string;
	payload: object | undefined;
}
const authReducer = (
	state: authState = initialState,
	action: authType
): authState => {
	switch (action.type) {
		case actionType.AUTH:
			localStorage.setItem('user', JSON.stringify({ ...action?.payload }));
			return {
				...state,
				authData: action.payload!,
				errors: null,
				loading: false,
			};
		case actionType.LOGOUT:
			localStorage.clear();
			return {
				...state,
				authData: null,
				loading: false,
			};
		default:
			return state;
	}
};

export default authReducer;
