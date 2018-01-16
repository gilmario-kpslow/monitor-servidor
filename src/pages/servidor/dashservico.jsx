import React, { Component } from 'react'

export class DashServico extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="card special">
                <div className="card-header">
                    <h4 className="card-title">{this.props.servidor.nome}</h4>
                    <span className="text-muted small">{this.props.servidor.ip}</span>
                </div>
                <div className="card-body">
                    <span className="card-title">Funcionalidade: {this.props.servidor.funcionalidade}</span>
                </div>
                <ul className="list-group list-group-flush">
                    
                </ul>
                <div className="card-footer text-muted">
                    <div className="row">
                        <div className="col-md">
                            Status: {this.props.servidor.status}
                        </div>
                        <div className="col-md">
                            <span className="text-success">Ativos: {this.props.servidor.ativos}</span>
                        </div>
                        <div className="col-md">
                            <span className="text-danger">inativos: {this.props.servidor.inativos}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}