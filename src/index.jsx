import './res/reset.css'
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
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
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/home/home'
import ServidorCadastro from './pages/servidor/cadastra'
import ProcessadorCadastro from './pages/processador/cadastro'
import SoCadastro from './pages/so/cadastra'
import ServidorView from './pages/servidor/servidorview'
import servidorReducer from './domain/servidor/servidorReducer'
import servicoReducer from './domain/servico/servicoReducer'
import soReducer from './domain/so/soReducer'
import { ToastContainer, toast } from 'react-toastify';

const reducers = combineReducers({
    servidor: servidorReducer,
    servico: servicoReducer,
    so : soReducer
})

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(multi, promise, thunk)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <ToastContainer />
                <Switch>
                    <Route component={Home} path="/" exact />
                    <Route component={ServidorCadastro} path="/servidor/cadastro" />
                    <Route component={SoCadastro} path="/so/cadastro" />
                    <Route component={ProcessadorCadastro} path="/processador/cadastro" />
                    <Route component={ServidorView} path="/servidor/:id" />
                </Switch>
            </App>
        </Router>
    </Provider>
    , document.getElementById('app'))