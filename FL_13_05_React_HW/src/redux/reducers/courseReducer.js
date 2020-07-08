import {ADD_COURSE, DELETE_COURSE, EDIT_COURSE} from "../actionTypes/actionTypes";

const initialState = [
    {
        id: 1,
        title: 'Prerequisiteds',
        description: 'Webpack, AngularCLI, TypeScript',
        duration: '01h 34min',
        authors: 'Tania Stepanova',
        date: '18.02.18'
    },
    {
        id: 2,
        title: 'Prerequisiteds1',
        description: 'Webpack, AngularCLI, TypeScript',
        duration: '01h 34min',
        authors: 'Iryna Kolos',
        date: '19.02.20'
    }
];

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COURSE:
            const newState = [...state, action.payload];
            return newState;
        case DELETE_COURSE:
            return state.filter(({id}) => id !== action.payload);
        case EDIT_COURSE:
            return state.map(item => {
                return +item.id === +action.payload.id ? action.payload : item;
            });
        default: return state;
    }
};
export default courseReducer;