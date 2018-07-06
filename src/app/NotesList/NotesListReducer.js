const initState ={
    Notes:{}
}

const NotesList = (state = initState, action) => {
    switch (action.type) {
        case 'DODAJ_NOTATKE':
            return ;
        case 'FETCH_NOTES':
            return Object.assign({}, state, {Notes:action.payload});
        default:
            return state
    }
}
export default NotesList;