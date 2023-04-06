const request = async (method, url, data) => {
    const options = {};

    if (method !== 'GET') {
        options.method = method;

        if (data) {
            options.headers = {
                'content-type': 'application/json',
            };

            options.body = JSON.stringify(data);
        }
    }

    const serializedAuth = localStorage.getItem('auth');
    if (serializedAuth) {
        const auth = JSON.parse(serializedAuth);

        if (auth.accessToken) {
            options.headers = {
                ...options.headers,
                'X-Authorization': auth.accessToken,
            };
        }
    }

    try {
        const response = await fetch(url, options); //requester.js:29   GET http://localhost:3030/users/logout 403 (Forbidden)


        if (response.status === 204) {
            return response;
        }

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message);  //requester.js:39 Uncaught (in promise) Error: Invalid access token at request (requester.js:39:1) at async onLogout (AuthContext.js:44:1)
        }

        return result;
    } catch (err) {
        alert(err.message);
        throw err;
    }
};

export const requestFactory = () => {
    return {
        get: request.bind(null, 'GET'),
        post: request.bind(null, 'POST'),
        put: request.bind(null, 'PUT'),
        patch: request.bind(null, 'PATCH'),
        delete: request.bind(null, 'DELETE'),
    }
}
