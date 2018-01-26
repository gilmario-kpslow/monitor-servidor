import React, { Component } from 'react'
import If from '../../componentes/logica/if'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { getServidor } from '../../domain/servidor/servidorAction'
import InputLabel from '../../componentes/form/inputLabel'
import SelectLabel from '../../componentes/form/selectLabel'
import { info } from '../../log/log'
import ServidorCard from './servidorcard'


export class ServidorView extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.getServidor(this.props.match.params.id)
    }

    servicos() {
        <If teste={this.props.servidor.servicos}>
            {this.props.servidor.servicos.map(servico => (
                <li key={servico.id} className="list-group-item">{servico.nome}</li>
            ))}
        </If>
    }

    menu()


    render() {

        const servidor = this.props.servidor.servidor
        return (
            <ServidorCard servidor={servidor} menu={this.menu()}>
                <ul className="list-group list-group-flush">
                    {this.servicos()}
                </ul>
            </ServidorCard>
        )
    }
}

const mapState = state => ({
    servidor: state.servidor
})

const actions = (dispach) => bindActionCreators({ getServidor }, dispach)

export default connect(mapState, actions)(ServidorView)