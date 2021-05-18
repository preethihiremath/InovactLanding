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
	payload: ?object;
}

export interface projectUser {
	user_name: string;
	first_name: string;
	last_name: string;
	avatar: string;
}

export interface aggregate {
	count: number;
}

export interface aggregateOut {
	aggregate: aggregate;
}

export interface projectComments {
	created_at: string;
	id: number;
	project_id: number;
	updated_at: string;
	text: string;
	user_id: number;
	user: projectUser;
}
export interface project {
	caption: string;
	created_at: string;
	description: string;
	id: number;
	updated_at: string;
	url: string;
	user_id: number;
	user: projectUser;
	project_comments: ?projectComments[];
	project_comments_aggregate: ?aggregateOut;
	project_likes_aggregate: ?aggregateOut;
}
