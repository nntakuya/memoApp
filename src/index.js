// import Module from './module'
//
// const root = document.querySelector('#root');
//
// root.innerHTML = Module;

import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import  App from './components/App'
import  { composeWithDevTools } from 'redux-devtools-extension'

//（調べる）createStore関数の引数は, reducerを引数として取る？
const store = createStore(rootReducer, composeWithDevTools());


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
