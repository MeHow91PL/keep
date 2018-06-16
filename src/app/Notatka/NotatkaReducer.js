let id = 0;
export const NotatkaReducer = (
    state = [
    ], action) =>
{
    switch (action.type) {
        case 'DODAJ_NOTATKE':
            return [...state, {id:++id,tytul:`${action.payload.tytul}`, txt:`${action.payload.tekst}`}];
        default:
            return state;
    }
}