import { SET_PLACEHOLDER, SET_SEARCH_FILTER } from '../actions';

const initState = {
    inputPlaceholder: 'Szukaj',
    searchFilter: ''
}

export const searchReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_PLACEHOLDER:
            return { ...state, inputPlaceholder: action.payload }
        case SET_SEARCH_FILTER:
            return { ...state, searchFilter: action.payload }
        default:
            return state
    }
}