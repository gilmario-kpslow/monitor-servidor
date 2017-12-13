import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { pesquisar } from '../../domain/servidor/servidorAction'
import Servidor from '../servidor/servidor'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.pesquisar()
    }

    render() {
        return (
            <section className="row">
                {this.props.lista.map(servidor => (
                    <div className="col-md-4">
                        <Servidor servidor={servidor} key={servidor.id} />
                    </div>
                ))}
            </section>
        )
    }
}

const mapState = state => ({
    lista: state.servidor.lista
})

const actions = (dispach) => bindActionCreators({ pesquisar }, dispach)
export default connect(mapState, actions)(Home)