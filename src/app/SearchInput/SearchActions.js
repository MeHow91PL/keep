import { SEARCH_NOTE, SET_PLACEHOLDER,SET_SEARCH_FILTER } from '../actions';

export const searchNote = (payload) => ({
    type: SEARCH_NOTE,
    payload
})

export const setPaceholder = (payload) => ({
    type: SET_PLACEHOLDER,
    payload
})

export const setSearchFilter = (payload) => ({
    type: SET_SEARCH_FILTER,
    payload
})

