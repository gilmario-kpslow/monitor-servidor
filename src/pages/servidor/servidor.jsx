import React from 'react'
import If from '../../componentes/If'

export default props => {

    const servicos = () => {
        if (props.servidor.servicos) {
            props.servidor.servicos.map(servico => (
                <li key={servico.id} className="list-group-item">{servico.nome}</li>
            ))
        }
    }

    return (
        <div className="card special">
            <div className="card-header">
                <h4 className="card-title">{props.servidor.nome}</h4>
                <span className="text-muted small">{props.servidor.ip}</span>
            </div>
            <div className="card-body">
                <span className="card-title">Funcionalidade: {props.servidor.funcionalidade}</span>
            </div>
            <ul className="list-group list-group-flush">
                {servicos()}
            </ul>
            <div className="card-footer text-muted">
                <div className="row">
                    <div className="col-md">
                        Status: {props.servidor.status}
                    </div>
                    <div className="col-md">
                        <span className="text-success">Ativos: {props.servidor.ativos}</span>
                    </div>
                    <div className="col-md">
                    <span className="text-danger">inativos: {props.servidor.inativos}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}