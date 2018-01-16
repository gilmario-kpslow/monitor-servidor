import React, { Component } from 'react'
import If from '../../componentes/logica/if'
import Dropdown from '../../componentes/menu/dropdown'
import { Link } from 'react-router-dom'

export default props => (
    <div className="card special">
        <div className="card-header titulo-card">
            <h4 className="card-title">{props.servidor.nome}</h4>
            <div>
                {props.menu}
            </div>
            <span className="text-muted small">IP: {props.servidor.ip}</span>
        </div>
        <div className="card-body">
            <span className="card-title">Funcionalidade: {props.servidor.funcionalidade}</span>
        </div>
        {props.children}
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