export interface signinFormData {
	email: string;
	password: string;
}

export interface signupFormData {
	username: string;
	email: string;
	password: string;
}

export interface actiontype {
	type: string;
	payload: object | undefined;
}
