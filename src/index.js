import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import database from './app/Firebase';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';
import { NotatkaInputReducer } from './app/NotatkaInput/NotatkaInputReducer';
import NotesList from './app/NotesList/NotesListReducer';
import { sidebarReducer } from './app/Sidebar/SidebarReducer';

// export function getTasksThunk() {
//     return dispatch => {
//         const tasks = [];
//         database.once('value', snap => {
//             snap.forEach(data => {
//                 let task = data.val();
//                 tasks.push(task)
//             })
//         })
//             .then(() => dispatch(getTasks(tasks)))
//     }
// }

const reducers = combineReducers(
    {
        NotatkaInput: NotatkaInputReducer,
        NotesList,
        Sidebar: sidebarReducer
    })

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
