import * as request from './requester';
const baseUrl = "http://localhost:3030/users";

export const login = async(loginData) =>  await request.post(`${baseUrl}/login`, loginData);

export const register = async(registerData) => await request.post(`${baseUrl}/register`, registerData);

export const logout = () => request.get(`${baseUrl}/logout`);
