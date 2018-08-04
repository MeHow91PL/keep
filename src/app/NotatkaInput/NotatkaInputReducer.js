//actions
import { REQUEST_ADD_NOTICE_DONE, ZMIEN_TEKST, ROZWIN_NOTKE, ZWIN_NOTKE, REQUEST_ADD_NOTICE_START, REQUEST_ADD_NOTICE_REJECTED } from '../actions';

export const NotatkaInputReducer = (state = {
    tytul: "",
    tekst: "",
    aktywny: false
}, action) => {
    switch (action.type) {
        case ZMIEN_TEKST:
            return { ...state, ...action.payload }
        case ROZWIN_NOTKE: return { ...state, aktywny: true }
        case ZWIN_NOTKE: return { ...state, aktywny: false }
        // case REQUEST_ADD_NOTICE_START
        // return {}
        // case REQUEST_ADD_NOTICE_DONE
        // return {}
        case REQUEST_ADD_NOTICE_REJECTED:
        console.log('REQUEST_ADD_NOTICE_REJECTED', action.payload);
        return {...state, error:action.payload}
        default:
            return state;
    }
}