export const test = (payload) => {
    return ({type : 'TEST', payload})
}

export const pokazPrzyciski = (payload) => ({
    type: 'POKAZ_PRZYCISKI',
    payload
})