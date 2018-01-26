import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

import App from './app'
import Home from '../pages/home/home'
import ServidorCadastro from '../pages/servidor/cadastra'
import ProcessadorCadastro from '../pages/processador/cadastro'
import SoCadastro from '../pages/so/cadastra'
import ListaSo from '../pages/so/lista'
import ListaProcessador from '../pages/processador/lista'
import ServidorView from '../pages/servidor/servidorview'

export default () => (
    <Router>
        <App>
            <ToastContainer />
            <Switch>
                <Route component={Home} path="/" exact />
                <Route component={ServidorCadastro} path="/servidor/cadastro/:id" />
                <Route component={ServidorCadastro} path="/servidor/cadastro" />
                <Route component={SoCadastro} path="/so/cadastro" />
                <Route component={ListaSo} path="/so/lista" />
                <Route component={ListaProcessador} path="/processador/lista" />
                <Route component={ProcessadorCadastro} path="/processador/cadastro" />
                <Route component={ServidorView} path="/servidor/:id" />
                
            </Switch>
        </App>
    </Router>
)


