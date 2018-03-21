import {UPDATE_PAGE} from "../actions/page-actions";

export default function(state = 'Home' , {type, payload}) {
    switch(type) {
        case UPDATE_PAGE:
            return payload.name;
        default: return state;
    }

}