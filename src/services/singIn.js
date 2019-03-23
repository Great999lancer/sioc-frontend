/* global fetch */

import {authEndpoint} from '../../config.ts/index.js';

export default class SignIn {
    static async login(email, password) {
        const response = await fetch(`${authEndpoint}auth/login`, {
            method: 'post',
            credentials: 'same-origin',
            body: JSON.stringify({email, password}),
            headers: {
                'content-type': 'application/json'
            }
        });
        return response.json();
    }
}
