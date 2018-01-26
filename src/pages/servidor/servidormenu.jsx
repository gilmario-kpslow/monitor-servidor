import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from '../../componentes/menu/dropdown'
import {mensagem} from '../../domain/padrao/actionPadrao'

export default props => (
    <Dropdown id="servidor-menu" icone="th-list">
        <Link className="dropdown-item" to={`/servidor/${props.id}`}>
            <i className="fa fa-eye" />Ver
        </Link>
        <Link className="dropdown-item" to={`/servidor/cadastro/${props.id}`}>
            <i className="fa fa-pencil" />Editar
        </Link>
        <div className="dropdown-divider"></div>
        <button className="dropdown-item" type="button" onClick={() => mensagem({tipo:"erro", descricao:"Tentando excluir o servidor HÃA!!!"})}><i className="fa fa-trash" />Remover</button>
    </Dropdown>
)