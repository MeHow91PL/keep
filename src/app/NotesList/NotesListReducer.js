

const NotesList = (state = {}, action) => {
    switch (action.type) {
        case 'DODAJ_NOTATKE':
            return ;
        case 'FETCH_NOTES':
            return action.payload;
        default:
            return state
    }
}
export default NotesList;