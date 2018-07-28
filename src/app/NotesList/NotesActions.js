// import database from '../Firebase'

export const fetchNotes = () => {
    // return dispatch => {
    //     database.on('value', snapshot => {
    //         dispatch({
        // type: 'FETCH_NOTES',
        // payload: snapshot.val()
    //             
    //         })
    //     })
    // }
   
    return {
        type: 'FETCH_NOTES_REQUEST_START',
    }
}

export const setSize = (payload) => {
    return {
        type: 'SET_SIZE',
        payload
    }
}

export const setNotesPos = (payload) => ({
    type: 'SET_NOTES_POS',
    payload
})