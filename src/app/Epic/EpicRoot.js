import { combineEpics, ofType } from 'redux-observable'
import { mergeMap, map, mergeAll, mapTo, ignoreElements, delay, switchMap, debounceTime, catchError, flatMap, concatMap } from 'rxjs/operators'
import { Observable, of, concat } from 'rxjs';
import database from '../Firebase';
import { ajax } from 'rxjs/ajax';
import uuid from 'uuid/v4';

//REDUX
//actions
import {
    FETCH_NOTES_REQUEST_START, ACTIVE_NOTE,
    FETCH_NOTES_REQUEST_DONE, DEACTIVE_NOTE,
    REQUEST_ADD_NOTICE_START, REQUEST_ADD_NOTICE_DONE, REQUEST_ADD_NOTICE_REJECTED
} from '../actions';

const apiUrl = 'http://localhost:3000/'

const fetchNotes = action$ => action$.pipe(
    ofType(FETCH_NOTES_REQUEST_START),
    mergeMap(action =>
        ajax.getJSON(apiUrl + 'notes/').pipe(
            map(
                response => ({ type: 'FETCH_NOTES_REQUEST_DONE', payload: response })
            )
            //#region Get from Firebase directly

            // Observable.create(observer => {
            //     database.on('value', snap => {
            //         console.log(snap.val());

            //         observer.next({ type: FETCH_NOTES_REQUEST_DONE, payload: snap.val() })
            //     })
            // })

            //#endregion
            , catchError(err => of({
                type: REQUEST_ADD_NOTICE_REJECTED,
                payload: err
            }))
        )
    )
)

const addNote = action$ => action$.pipe(
    ofType(REQUEST_ADD_NOTICE_START),
    mergeMap(action =>
        ajax.post(
            apiUrl + 'notes/',
            action.payload,
            { 'Content-Type': 'application/json' }).pipe(
                concatMap(
                    response => concat(
                        of({ type: REQUEST_ADD_NOTICE_DONE, payload: response }),
                        of({ type: FETCH_NOTES_REQUEST_START })
                    )
                ),
                catchError(err => of({
                    type: REQUEST_ADD_NOTICE_REJECTED,
                    payload: err
                }))
            )
    )
)


// database.push({
//         id:uuid(), 
//         tytul: action.tytul, 
//         tekst: action.tekst 
//     });
// return {
//     type: REQUEST_ADD_NOTICE_DONE,
// }


export default combineEpics(
    fetchNotes,
    addNote
)