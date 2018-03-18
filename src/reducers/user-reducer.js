import { UPDATE_USER } from "../actions/user-actions"

//reducer is listening to every action that is sent
export default function userReducer(state = '', {type, payload}) {

    switch (type) {
        case UPDATE_USER:
            return payload.user;
        default:
            return state
    }
}
