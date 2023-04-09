import { requestFactory } from './requester';
import { url } from '../config';
const baseUrl = `${url}/data/contacts`;

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

/*
[
    {
        "_ownerId": "21426b35-50d0-4115-bcc6-6403120aaeef",
        "name": "sgdgv",
        "email": "gvvvv",
        "message": "vvvvvv",
        "_createdOn": 1680510793372,
        "_id": "ce310517-4a56-4df4-87de-16103b0b530f"
    }
]
*/