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
export const SHOW_USER_DETAILS = 'user:showUserDetails';
export function showUserDetails(userObj) {
    console.log(userObj);

    return {
        type: SHOW_USER_DETAILS,
        payload: {
            user : userObj.results[0].name.first
        }
    }
}

export const SHOW_ERROR_USER = 'user:showErrorUser';
export function showErrorUser(error) {

    return {
        type: SHOW_ERROR_USER,
        payload: {
            user : "error"
        }
    }
}

export function apiRequest() {
    return {
        type: GET_RANDOM_USER_API,
        payload: {
            url: 'https://randomuser.me/api/',
            params: {
                dataType: 'json'
            },
            onSuccess: function (response) {
                console.log('SUCCESS', response);
                return showUserDetails(response.data)
            },
            onFailure: function (error) {
                console.log('ERROR', error);
                return showErrorUser(error)
            }
        }
    };
}


