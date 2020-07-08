import {SEARCH_COURSE} from "../actionTypes/actionTypes";

const initState = {
    search: ''
};

const searchReducer = (state = initState, action) => {
    if (action.type === SEARCH_COURSE) {
        return { search: action.payload};
    }
    return state;
};

export default searchReducer;