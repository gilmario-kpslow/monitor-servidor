import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { incluir, change } from '../../domain/servidor/servidorAction'
import InputLabel from '../../componentes/inputLabel'
import SelectLabel from '../../componentes/selectLabel'

class ServidorCadastro extends Component {
    constructor(props) {
        super(props)
    }

    componentWilldMount() {

    }

    render() {
        return (
            <section className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Cadastro de Servidores</h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <InputLabel change={this.props.change} label="Nome" name="nome" estilo="col-md-5" value={this.props.servidor.nome} maxLength="25"/>
                                <InputLabel label="IP" estilo="col-md" name="ip" change={this.props.change} value={this.props.servidor.ip}/>
                                <SelectLabel label="Tipo de Máquina" estilo="col-md" name="tipo" onChange={this.props.change} value={this.props.servidor.tipo}>
                                    <option value="Host">Maquina Fisica</option>
                                    <option value="Virtual">Maquina Virtual</option>
                                </SelectLabel>
                                <InputLabel label="Descrição" estilo="col-md-12" name="descricao" change={this.props.change} value={this.props.servidor.descricao}/>
                                <InputLabel label="Função" estilo="col-md-6" name="funcionalidade" change={this.props.change} value={this.props.servidor.funcionalidade}/>
                                <InputLabel label="Sistema Operacional" estilo="col-md-6" name="sistemaOperacional" change={this.props.change} value={this.props.servidor.sistemaOperacional}/>
                                <InputLabel label="HD" estilo="col-md" name="hd" change={this.props.change} value={this.props.servidor.hd}/>
                                <InputLabel label="Memória" estilo="col-md" name="memoria" change={this.props.change} value={this.props.servidor.memoria}/>
                                <InputLabel label="Processador" estilo="col-md" name="processador" change={this.props.change} value={this.props.servidor.processador}/>
                                <InputLabel label="Núcleos" estilo="col-md" name="qtdProcessador" change={this.props.change} value={this.props.servidor.qtdProcessador}/>
                            </div>

                        </div>
                        <div className="card-footer text-muted">
                            <div className="row">
                                <div className="col-md-2">
                                    <button className="btn btn-danger form-control" onClick={() =>{this.props.incluir(this.props.servidor)}}><i className="fa fa-disk"></i> Salvar</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapState = state => ({
    servidor: state.servidor.servidor
})

const actions = (dispach) => bindActionCreators({ incluir, change }, dispach)

export default connect(mapState, actions)(ServidorCadastro)

