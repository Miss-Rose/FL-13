import {ADD_COURSE, DELETE_COURSE, EDIT_COURSE, SEARCH_COURSE} from "../actionTypes/actionTypes";

export const addCourse = (data) => ({type: ADD_COURSE, payload: data});
export const deleteCourse = (data) => ({type: DELETE_COURSE, payload: data});
export const editCourse = (data) => ({type: EDIT_COURSE, payload: data});
export const searchCourse = (data) => ({type: SEARCH_COURSE, payload: data});

