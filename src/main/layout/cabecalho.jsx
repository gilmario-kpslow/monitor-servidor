import React from 'react'
import {Link} from 'react-router-dom'

export default props => (
    <nav className="navbar navbar-dark navbar-fixed-top bg-dark">
        <a key={1} className="navbar-brand" href="#">Monitor</a>
        <Link key={2} to="/servidor/cadastro">
            <a className="navbar-brand" href="#">Cadastra</a>
        </Link>
    </nav>
)