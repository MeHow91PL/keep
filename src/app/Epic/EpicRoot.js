//RxJS
import { ajax } from 'rxjs/ajax';
import { Observable } from 'rxjs';
import { mergeMap, map, mergeAll, mapTo, ignoreElements, delay, switchMap, debounceTime } from 'rxjs/operators'
import { combineEpics, ofType } from 'redux-observable'

//Database
import database from '../Firebase';

//Actions
import { 
    REQUEST_ADD_NOTICE_START,
    FETCH_NOTES_REQUEST_START,
    FETCH_NOTES_REQUEST_DONE
 } from '../actions';

const fetchNotes = action$ => action$.pipe(
    ofType(FETCH_NOTES_REQUEST_START),
    mergeMap(action =>
        // ajax.getJSON(`https://jsonplaceholder.typicode.com/posts`).pipe(
        //     map(
        //         response => ({ type: 'FETCH_NOTES_REQUEST_DONE', payload: response })
        //     )
        // )
        Observable.create(observer => {
            database.on('value', snap => {
                observer.next({ type: FETCH_NOTES_REQUEST_DONE, payload: snap.val()})
            })
        })
    )
)

const addNote = action$ => action$.pipe(
    ofType(REQUEST_ADD_NOTICE_START),
    
)

// const test = action$ => action$.pipe(
//     ofType('ACTIVE_NOTE'),
//     debounceTime(500),
//     map(action => ({
//         type: 'SHOW_MORE_NOTE',
//         payload: action.payload
//     }))
// )
const test2 = action$ => action$.pipe(
    ofType('DEACTIVE_NOTE'),
    debounceTime(500),
    mapTo({
        type: 'SHOW_LESS_NOTE'
    })
)


export default combineEpics(
    fetchNotes,
    // test,
    test2
)