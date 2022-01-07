import axios from 'axios';

const TOKEN = 'YH3VyqLiNTTQAX17wgRw5hOb_9YyqMM6jqcOnmWXc2ypIIOx6uhAqCK5QiW-RMGjU-s'
export const API_UNIVERSAL_AUTH_TOKEN = 'apiUneversalAuthToken';
export class UniversalTutorialRepository {
    static getAccessToken() {
        return axios.get('https://www.universal-tutorial.com/api/getaccesstoken', {
            headers: {
                "Accept": "application/json",
                "api-token": TOKEN,
                "user-email": "elvinahmadov0@gmail.com"
            }
        }).then(response=>response.data)
    }

    static getCountries() {
        return axios.get('https://www.universal-tutorial.com/api/countries/', {
            headers: {
                  "Authorization": `Bearer ${sessionStorage.getItem(API_UNIVERSAL_AUTH_TOKEN)}`,
            "Accept": "application/json"
            }
        }).then(response=>response.data)
    }
}