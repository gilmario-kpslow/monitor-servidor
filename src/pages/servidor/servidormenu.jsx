import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from '../../componentes/menu/dropdown'

export default props => (
    <Dropdown id="servidor-menu" icone="th-list">
        <Link className="dropdown-item" to={`/servidor/${props.id}`}>
            <i className="fa fa-eye" />Ver
        </Link>
        <button className="dropdown-item" type="button"><i className="fa fa-eye" />Ver</button>
        <button className="dropdown-item" type="button"><i className="fa fa-pencil" />Editar</button>
        <div className="dropdown-divider"></div>
        <button className="dropdown-item" type="button"><i className="fa fa-trash" />Remover</button>
    </Dropdown>
)