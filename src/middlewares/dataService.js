import {GET_RANDOM_USER_API} from "../actions/user-actions";
import axios from 'axios'

const dataService = store => next => ({type,payload}) => {

    next({type,payload})

    switch (type) {
        case GET_RANDOM_USER_API:
            axios
                .get(payload.url,
                    payload.params
                )
                .then(response =>
                    store.dispatch(payload.onSuccess(response))
                )
                .catch(error =>
                    store.dispatch(payload.onFailure(error))
                );
            break;
        default:
            break;
    }

};


export default dataService