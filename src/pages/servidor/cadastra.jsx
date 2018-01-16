import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { incluir, change, novo } from '../../domain/servidor/servidorAction'
import InputLabel from '../../componentes/form/inputLabel'
import SelectLabel from '../../componentes/form/selectLabel'
import SelectUnidade from '../../componentes/layout/unidade'
import { info } from '../../log/log'
import Panel from '../../componentes/layout/panel'

class ServidorCadastro extends Component {
    constructor(props) {
        super(props)
    }

    change(event) {

    }

    componentWillMount() {
        this.props.novo()
    }

    footer(){
        return(<button className="btn btn-danger form-control" onClick={() => { this.props.incluir(this.props.servidor) }}><i className="fa fa-disk"></i> Salvar</button>)
    }

    render() {
        info(this.props.servidor)
        return (
            <Panel titulo="Cadastro de Servidores" footer={this.footer()}>
                <div className="row">
                    <InputLabel change={this.props.change} label="Nome" name="nome" estilo="col-md-5" value={this.props.servidor.nome} maxLength="25" />
                    <InputLabel label="IP" estilo="col-md" name="ip" change={this.props.change} value={this.props.servidor.ip} />
                    <SelectLabel label="Tipo de Máquina" estilo="col-md" name="tipo" change={this.props.change} value={this.props.servidor.tipo}>
                        <option value="Host">Maquina Fisica</option>
                        <option value="Virtual">Maquina Virtual</option>
                    </SelectLabel>
                    <InputLabel label="Descrição" estilo="col-md-12" name="descricao" change={this.props.change} value={this.props.servidor.descricao} />
                    <InputLabel label="Função" estilo="col-md-6" name="funcionalidade" change={this.props.change} value={this.props.servidor.funcionalidade} />
                    <InputLabel label="Sistema Operacional" estilo="col-md-6" name="sistemaOperacional" change={this.props.change} value={this.props.servidor.sistemaOperacional} />
                    <InputLabel control="hd" label="HD" estilo="col-md" name="hd.quantidadeHD" change={this.props.change} value={this.props.servidor.hd.quantidadeHD} />
                    <SelectUnidade control="hd" label="Unidade HD" estilo="col-md" name="hd.unidadeHD" change={this.props.change} value={this.props.servidor.hd.unidadeHD} />
                    <InputLabel label="Memória" control="memoria" estilo="col-md" name="memoria.quantidadeMemoria" change={this.props.change} value={this.props.servidor.memoria.quantidadeMemoria} />
                    <SelectUnidade label="Unidade Mem." control="memoria" estilo="col-md" name="memoria.unidadeMemoria" change={this.props.change} value={this.props.servidor.memoria.unidadeMemoria} />
                    <InputLabel label="Processador" estilo="col-md" name="processador" change={this.props.change} value={this.props.servidor.processador} />
                    <InputLabel label="Núcleos" estilo="col-md" name="qtdProcessador" change={this.props.change} value={this.props.servidor.qtdProcessador} />
                </div>
            </Panel>
        )
    }
}

const mapState = state => ({
    servidor: state.servidor.servidor
})

const actions = (dispach) => bindActionCreators({ incluir, change, novo }, dispach)

export default connect(mapState, actions)(ServidorCadastro)

