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