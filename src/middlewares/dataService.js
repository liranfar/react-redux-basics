import {API_REQUEST} from "../actions/user-actions";

const dataService = store => next => action => {

    switch (action.type) {
        case API_REQUEST:
            action.payload.request()
        default:
            break;
    }

};


export default dataService