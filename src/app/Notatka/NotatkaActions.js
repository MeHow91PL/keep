export const test = (payload) => {
    return ({type : 'TEST', payload})
}

export const activeNote = (id) => ({
    type: 'ACTIVE_NOTE',
    payload:id
})

export const deactiveNote = () => ({
    type: 'DEACTIVE_NOTE'
})