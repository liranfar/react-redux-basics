//the user prefix is just scopes our action type to avoid collisions with actions and other components
import axios from 'axios'
export const UPDATE_USER = 'user:updateUser';
export function updateUser(newUser) {
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser
        }
    }
}

export const API_REQUEST = 'user:apiRequest';
export function apiRequest() {
    return  {
        type: API_REQUEST,
        payload: {
            request: () => {
                axios.
                get('https://randomuser.me/api/', {
                    params :{
                        dataType: 'json'
                    }
                })
                    .then(function (response) {
                        console.log('SUCCESS', response)
                    })
                    .catch(function (error) {
                        console.log('ERROR', error)
                    });
            }
        }

    }
}