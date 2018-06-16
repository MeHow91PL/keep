import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';
import {NotatkaInputReducer} from './app/NotatkaInput/NotatkaInputReducer';
import {NotatkaReducer} from './app/Notatka/NotatkaReducer';

const reducers = combineReducers({NotatkaInput: NotatkaInputReducer, ListaNotatek: NotatkaReducer})

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
