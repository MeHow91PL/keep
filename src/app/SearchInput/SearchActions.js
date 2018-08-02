import { SEARCH_NOTE, SET_PLACEHOLDER,SET_SEARCH_FILTER, ACTIVATE_SEARCH_INPUT, DEACTIVATE_SEARCH_INPUT } from '../actions';

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

export const activateSearchInput = () => ({
    type: ACTIVATE_SEARCH_INPUT
})

export const deactivateSearchInput = () => ({
    type: DEACTIVATE_SEARCH_INPUT
})

