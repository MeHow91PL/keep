export const dodajNotatke = (payload) => {
    return ({type : 'DODAJ_NOTATKE', payload})
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