//import './res/reset.css'
import 'modules/bootstrap/dist/css/bootstrap-reboot.min.css'
import 'modules/bootstrap/dist/css/bootstrap-grid.min.css'
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import './res/app.css'
import 'jquery';
import 'bootstrapjs';
import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import Rotas from './main/rotas'
import {reducers} from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(multi, promise, thunk)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <Rotas/>
    </Provider>
    , document.getElementById('app'))