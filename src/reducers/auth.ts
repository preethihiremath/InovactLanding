import * as actionType from '../constants/actionTypes';
import { actiontype } from '../constants/interfaceTypes';

interface authInitialState {
	authData: object | null;
	loading: boolean;
	errors: object | null;
}

const initialState: authInitialState = {
	authData: null,
	errors: null,
	loading: false,
};

const authReducer = (
	state: authInitialState = initialState,
	action: actiontype
): authInitialState => {
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
