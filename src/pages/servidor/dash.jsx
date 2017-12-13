import React, { Component } from 'react'

class DashServico extends Component {

    constructor(props) {
        super(props)
    }

    render() {
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
}