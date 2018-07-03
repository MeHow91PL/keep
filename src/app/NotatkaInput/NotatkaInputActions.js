import database from '../Firebase';
import uuid from 'uuid/v4'
    // id: ++id, 
    //     tytul: action.payload.tytul, 
    //     tekst: action.payload.tekst 

export const dodajNotatke = (payload) => {
    // console.log(payload,"elo");
    
    // return ({type : 'DODAJ_NOTATKE', payload})

    return dispatch => database.push({
        id:uuid(), 
        tytul: payload.tytul, 
        tekst: payload.tekst 
    });

    // return dispatch => {
    //     database.on('value', snapshot =>{
    //         dispatch({type : 'DODAJ_NOTATKE', payload})
    //     })
    // }
}

export const zmienTekst = (payload) => {
    return ({type : 'ZMIEN_TEKST', payload})
}

export const rozwinNotke = () => {
    return ({type : 'ROZWIN_NOTKE', })
}

export const zwinNotke = () => {
    return ({type : 'ZWIN_NOTKE'})
}