import { SET_PLACEHOLDER, SET_SEARCH_FILTER, ACTIVATE_SEARCH_INPUT, DEACTIVATE_SEARCH_INPUT } from '../actions';

const initState = {
    inputPlaceholder: 'Szukaj',
    searchFilter: '',
    inputIsActive: false
}

export const searchReducer = (state = initState, action) => {
    console.log(action);

    switch (action.type) {
        case SET_PLACEHOLDER:
            return { ...state, inputPlaceholder: action.payload }
        case SET_SEARCH_FILTER:
            return { ...state, searchFilter: action.payload }
        case ACTIVATE_SEARCH_INPUT:
        
            return { ...state, inputIsActive: true }
        case DEACTIVATE_SEARCH_INPUT:
            return { ...state, inputIsActive: false }
        default:
            return state
    }
}