import React from 'react'
import Menu from '../../componentes/layout/menu'
import MenuItem from '../../componentes/layout/menuitem'


export default props => (
    <header>
        <nav className="navbar navbar-dark navbar-fixed-top navbar-expand-lg bg-dark">
            <a className="navbar-brand" href="#">Monitor</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <MenuItem para="/so/cadastro" label="SO" />
                    <MenuItem para="/servidor/cadastro" label="Servidor" />
                </ul>
            </div>
        </nav>
    </header>
)
