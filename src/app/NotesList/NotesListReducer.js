let id=0;

const initState = [{id: ++id, tytul: "test", tekst: "Id mollit magna nostrud aliquip laborum laboris ad."} ]

const NotesList = (state = initState, action) => {
    switch (action.type) {
        case 'DODAJ_NOTATKE':
            return [...state,{id: ++id, tytul: action.payload.tytul,tekst: action.payload.tekst}];
        default:
            return state
    }
}
export default NotesList;