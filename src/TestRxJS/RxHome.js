import React, { Component } from 'react'
import { connect } from 'react-redux'

//RxJS
import { delay, mapTo, tap, map, mergeMap } from 'rxjs/operators'
import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax'
import { merge, Observable } from '../../node_modules/rxjs';
import database from '../app/Firebase'

export const rxReducer = (state = '', action) => {
    switch (action.type) {
        case 'PING':
            return 'PING'
        case 'PONG':
            return 'PONG'
        default:
            return state
    }
}

export const ping = (payload) => ({
    type: 'PING',
    payload
})



export const s = action$ => action$.pipe(
    ofType('REQUEST_ADD_NOTICE_START'),
    mergeMap(action =>
        // ajax.getJSON(`https://api.github.com/users/torvalds`).pipe(
        //   map(
        //       response => ({type:'FETCH_NOTES_REQUEST_DONE', payload:response})
        //     )
        Observable.create(observer =>{
            database.on('value', snap=>{
                observer.next({type:'FETCH_NOTES_REQUEST_DONE', payload:snap.val()})
            })
        })
    ))



class RxJsTest extends Component {



    render() {
        const { ping } = this.props;
        return (
            <div>
                <button onClick={ping}>PING</button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = {
    ping: ping
}


export default connect(mapStateToProps, mapDispatchToProps)(RxJsTest)