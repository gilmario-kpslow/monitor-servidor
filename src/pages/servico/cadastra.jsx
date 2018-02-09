import React, { Component } from 'react'
import Panel from '../../componentes/layout/panel';
import InputLabel from '../../componentes/form/inputLabel'
import Botao from '../../componentes/form/botao'
import Select from '../../componentes/form/selectLabel'
import { publicaRedux } from '../../componentes/logica/publicaRedux'
import { getServico, change, novo, incluir } from '../../domain/servico/servicoAction'
import { info } from '../../log/log'

class CadastraServico extends Component {

    footer() {
        return (
            <Botao label="Salvar" click={() => { this.props.incluir(this.props.servico) }} icone="save"/>
        )
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.getServico(this.props.match.params.id)
            info('pegando dados do servidor')
        } else {
            this.props.novo(this.props.match.params.servidor)
        }
    }

    render() {
        return (
            <Panel titulo="Cadastro de Serviço" footer={this.footer()}>
                <div className="row">
                    <InputLabel erros={this.props.erros} change={this.props.change} label="Nome" name="nome" estilo="col-md-5" value={this.props.servico.nome} maxLength="60" />
                    <InputLabel erros={this.props.erros} change={this.props.change} label="Porta" name="porta" estilo="col-md-2" value={this.props.servico.porta} maxLength="5" />
                    <Select erros={this.props.erros} change={this.props.change} label="Tipo de Servico" name="tipoServico" estilo="col-md " value={this.props.servico.tipoServico}>
                        <option value="WEB">WEB</option>
                        <option value="BANCO">BANCO</option>
                        <option value="OUTROS">OUTROS</option>
                    </Select>
                    <InputLabel erros={this.props.erros} change={this.props.change} label="Contexto" name="contexto" estilo="col-md" value={this.props.servico.contexto} maxLength="255" />
                </div>
            </Panel>
        )
    }
}

const mapState = state => ({
    servico: state.servico.servico,
    erros: state.servico.erros
})

export default publicaRedux(CadastraServico, mapState, { incluir, change, novo, getServico })
