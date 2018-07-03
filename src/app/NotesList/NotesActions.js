import database from '../Firebase'

export const fetchNotes = () => {

    return dispatch => {
        database.on('value', snapshot => {
            dispatch({
                type: 'FETCH_NOTES',
                payload: snapshot.val()
            })
        })
    }
}