import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
=======
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { composeWithDevTools } from 'redux-devtools-extension'

//Components
import App from './App';

//Reducers
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { NotatkaInputReducer } from './app/NotatkaInput/NotatkaInputReducer';
import NotesList from './app/NotesList/NotesListReducer';
import { NotatkaReducer } from './app/Notatka/NotatkaReducer';
import { sidebarReducer } from './app/Sidebar/SidebarReducer';
import { searchReducer } from './app/SearchView/SearchReducer';

//Routing
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

//RxJS
import EpicsRoot from './app/Epic/EpicRoot'
import { createEpicMiddleware } from 'redux-observable'

import './index.css';
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
const history = createBrowserHistory();
const epicMiddleware = createEpicMiddleware();

const reducers = combineReducers(
    {
        NotatkaInput: NotatkaInputReducer,
        Note: NotatkaReducer,
        NotesList,
        Sidebar: sidebarReducer,
        SearchMode: searchReducer
    })

const store = createStore(connectRouter(history)(reducers),
    composeWithDevTools(
        applyMiddleware(
            epicMiddleware,
            routerMiddleware(history)
        )
    )
)

epicMiddleware.run(EpicsRoot)

ReactDOM.render(
    <Provider store={store}>
            <App history={history} />
    </Provider>, document.getElementById('root'));
>>>>>>> f78095709e10ad46209d28d8e3321eb28824fed6
registerServiceWorker();
