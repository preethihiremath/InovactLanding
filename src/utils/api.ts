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
