import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../pages/home/home'
import Cabecalho from './layout/cabecalho'
import Mensagem from '../componentes/mensagem'
import Menu from './layout/menu'
import { BASE_NAME } from '../config/configConstantes'

export default props => (
    <div className="container-fluid">
        <Cabecalho />
        
        <Mensagem />
        <main className="main">
            {props.children}
        </main>

    </div>
)