import { requestFactory } from './requester';
import { url } from '../config';
const baseUrl = `${url}/data/heroes`;

export const heroServiceFactory = () => {
    const request = requestFactory();

    const getAll = async () => {
        const result = await request.get(baseUrl);
        
        return Object.values(result); 
        
    };

    return {
        getAll,
    }
}
