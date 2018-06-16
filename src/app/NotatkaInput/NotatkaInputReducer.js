export const NotatkaInputReducer = (state = {
    tytul: "",
    tekst: "",
    aktywny: ""
}, action) => {
    switch (action.type) {
        case 'ZMIEN_TEKST':
            return {
                ...state,
                tytul: action.payload.tytul,
                tekst: action.payload.tekst
            }
        case 'ROZWIN_NOTKE':
            return {
                ...state,
                aktywny: "aktywny"
            }
        case 'ZWIN_NOTKE':
            return {
                ...state,
                aktywny: ""
            }
        default:
            return state;
    }
}