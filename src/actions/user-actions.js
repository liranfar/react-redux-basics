//the user prefix is just scopes our action type to avoid collisions with actions and other components
export const UPDATE_USER = 'user:updateUser';
export function updateUser(newUser) {
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser
        }
    }
}

export const GET_RANDOM_USER_API = 'user:getRandomUserApi';
export function apiRequest() {
    return {
        type: GET_RANDOM_USER_API,
        payload: {
            url: 'https://randomuser.me/api/',
            params: {
                dataType: 'json'
            },
            onSuccess: function (response) {
                console.log('SUCCESS', response)
            },
            onFailure: function (error) {
                console.log('ERROR', error)
            }
        }
    };
}


