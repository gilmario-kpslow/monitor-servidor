import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import './res/reset.css'
import './res/app.css'
import 'jquery';
import 'bootstrapjs';
import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import App from './main/app'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/home/home'



const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()


const store = applyMiddleware(multi, promise, thunk)(createStore)(devTools)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Route component={Home} path="/" exact />
            </App>
        </Router>
    </Provider>
    , document.getElementById('app'))