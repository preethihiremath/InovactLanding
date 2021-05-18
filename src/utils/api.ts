import axios from 'axios';
import { signinFormData } from '../constants/interfaceTypes';

const API = axios.create({ baseURL: 'localhost:8888/.netlify/functions' });

//* the below code can be used to add the authorizatin header to the request
//* but it will sent it in a cookie
// API.interceptors.request.use((req) => {
// })

export const signIn = (FormData: signinFormData) =>
	API.post('/auth/local/signin', FormData);

export const signUp = (FormData: any) =>
	API.post('/auth/local/signup', FormData);

export const fetchProject = (id: number) => API.get(`/projectGet?id=${id}`);

export const fetchProjects = () => API.get(`/projectGetAll`);

export const fetchProjectsBySearch = (searchQuery: any) =>
	API.get(
		`/project/search?searchQuery=${searchQuery.search || 'none'}&tags=${
			searchQuery.tags
		}`
	);

export const createProject = (newProject: object) =>
	API.post('/project', newProject);

export const likeProject = (id: number, userId: number) =>
	API.patch(`/projectLike`, { id, userId });

export const updateProject = (id: number, updatedProject: object) =>
	API.patch(`/projectUpdate`, { id, updatedProject });

export const deleteProject = (id: number) =>
	API.delete(`/projectDelete?id=${id}`);
