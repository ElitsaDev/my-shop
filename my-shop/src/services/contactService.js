import { requestFactory } from './requester';
const baseUrl = 'http://localhost:3030/data/contacts'

export const contactServiceFactory = (token) => {

    const request = requestFactory(token);

    const create = async (contactData) => {
        const result = await request.post(baseUrl, contactData);

        console.log(result);

        return result;
    };

    return {
        create,
    }
}