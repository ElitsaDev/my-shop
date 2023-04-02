import { requestFactory } from './requester';
const baseUrl = "http://localhost:3030/users";

export const authServiceFactory = (token) => {
    
    const request = requestFactory(token);

    return {
        login: async (loginData) => await request.post(`${baseUrl}/login`, loginData),
        register: async (registerData) => await request.post(`${baseUrl}/register`, registerData),
        logout: () => request.get(`${baseUrl}/logout`),
    }
}