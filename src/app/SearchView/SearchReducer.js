import { SET_PLACEHOLDER, SET_SEARCH_FILTER, SET_INPUT_DEACTIVE, SET_INPUT_ACTIVE } from '../actions';

const initState = {
    inputPlaceholder: 'Szukaj',
    searchFilter: '',
    isActive: false
}

export const searchReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_PLACEHOLDER:
            return {
                ...state,
                inputPlaceholder: action.payload
            }
        case SET_SEARCH_FILTER:
            return {
                ...state,
                searchFilter: action.payload
            }
        case SET_INPUT_ACTIVE:
            return {
                ...state,
                isActive: true
            }
        case SET_INPUT_DEACTIVE:
            return {
                ...state,
                isActive: false
            }
        default:
            return state
    }
}