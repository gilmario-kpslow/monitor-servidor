import React, { Component } from 'react'
import Panel from '../../componentes/layout/panel'
import Botao from '../../componentes/form/botao'
import { info } from '../../log/log'
import InputLabel from '../../componentes/form/inputLabel'
import { change } from '../../domain/padrao/actionPadrao';
import { incluir } from '../../domain/processador/processadorAction'
import { publicaRedux } from '../../componentes/logica/publicaRedux'

class ProcessadorCadastro extends Component {

    constructor(props) {
        super(props)
    }

    footer() {
        return (
            <Botao icone="disk" label="Salvar" click={() => { this.props.incluir(this.props.processador) }} />
        )
    }

    render() {
        return (
            <Panel titulo="Cadastro de Processador" footer={this.footer()}>
                <div className="row">
                    <InputLabel label="Nome" name="nome" estilo="col-md-6" value={this.props.processador.nome} change={this.props.change} />
                    <InputLabel label="Nucleos" name="cores" estilo="col-md" value={this.props.processador.cores} change={this.props.change} />
                    <InputLabel label="Cash (Mb)" name="memoriaCash" estilo="col-md" value={this.props.processador.memoriaCash} change={this.props.change} />
                    <InputLabel label="Frequência (Ghz)" name="frequencia" estilo="col-md" value={this.props.processador.frequencia} change={this.props.change} />
                </div>
            </Panel>
        )
    }
}

const mapState = state => (
    { processador: state.processador.processador }
)
export default publicaRedux(ProcessadorCadastro, mapState, { change, incluir })