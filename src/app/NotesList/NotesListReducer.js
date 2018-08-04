import { REQUEST_ADD_NOTICE_DONE } from "../actions";

const initState = {
    Notes: [],
    Container: {
        Height: 0,
        Width: 0
    },
    isFetchingStart: false,
    isFetchingDone: false
}

const NotesList = (state = initState, action) => {
    switch (action.type) {
        case 'DODAJ_NOTATKE':
            return;
        case 'FETCH_NOTES':
            return Object.assign({}, state, { Notes: action.payload });
        case 'FETCH_NOTES_REQUEST_START':
            return Object.assign({}, state, { isFetchingStart: true });
        case 'FETCH_NOTES_REQUEST_DONE':
            return Object.assign({}, state, { Notes: action.payload }, { isFetchingStart: false }, { isFetchingDone: true });
        case 'SET_NOTES_POS':
            return Object.assign({}, state, { Container: action.payload });
        case REQUEST_ADD_NOTICE_DONE:
            console.log('Added: ', action.payload);
            return state
        default:
            return state
    }
}
export default NotesList;