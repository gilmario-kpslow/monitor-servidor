import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { pesquisar } from '../../domain/servidor/servidorAction'
import ServidorCard from '../servidor/servidorcard'
import If from '../../componentes/logica/if'
import MenuServidor from '../servidor/servidormenu'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.pesquisar()
    }

    vazio() {
        return (
            <div className="col-md-12 text-center">
                <i className="fa fa-info-circle"></i> <span>Ops! Nenhum servidor encontrado!</span>
            </div>
        )
    }

    render() {
        return (
            <section>
                <section className="row">
                    <div className="col-md-6">
                        
                    </div>
                </section>
                <section  className="row">
                    <If teste={this.props.lista.length !== 0} vazio={this.vazio()}>
                        {this.props.lista.map(servidor => (
                            <div className="col-md-4" key={servidor.id}>
                                <ServidorCard servidor={servidor} key={servidor.id} menu={<MenuServidor id={servidor.id}/>}/>
                            </div>
                        ))}
                    </If>
                </section>
            </section>
        )
    }
}

const mapState = state => ({
    lista: state.servidor.lista
})

const actions = (dispach) => bindActionCreators({ pesquisar }, dispach)
export default connect(mapState, actions)(Home)