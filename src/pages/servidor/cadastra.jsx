import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { incluir, novo, getServidor } from '../../domain/servidor/servidorAction'
import {change} from '../../domain/padrao/actionPadrao'
import InputLabel from '../../componentes/form/inputLabel'
import SelectLabel from '../../componentes/form/selectLabel'
import SelectUnidade from '../../componentes/layout/unidade'
import { info } from '../../log/log'
import Panel from '../../componentes/layout/panel'
import {publicaRedux} from '../../componentes/logica/publicaRedux'
import SelectSo from '../so/selectSo'
import SelectProcessador from '../processador/selectProcessador'

class ServidorCadastro extends Component {
    constructor(props) {
        super(props)

    }

    componentWillMount() {
        
        if(this.props.match.params.id){
            this.props.getServidor(this.props.match.params.id)
            info('pegando dados do servidor')
        }else{
            this.props.novo()
        }
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
                    <SelectLabel label="Tipo de Máquina" value={this.props.servidor.tipo} estilo="col-md" name="tipo" change={this.props.change}>
                        <option key="Host" value="Host">Maquina Fisica</option>
                        <option key="Virtual" value="Virtual">Maquina Virtual</option>
                    </SelectLabel>
                    <InputLabel label="Descrição" estilo="col-md-6" name="descricao" change={this.props.change} value={this.props.servidor.descricao} />
                    <InputLabel label="Função" estilo="col-md-6" name="funcionalidade" change={this.props.change} value={this.props.servidor.funcionalidade} />
                    <SelectSo estilo="col-md-4" change={this.props.change} control="sistemaOperacional" value={this.props.servidor.sistemaOperacional.id} name="sistemaOperacional.id" label="Sistema Operacional"/>
                    <SelectProcessador label="Processador" control="processador" estilo="col-md-4" name="processador.id" change={this.props.change} value={this.props.servidor.processador.id} />
                    <InputLabel label="Nº de Processadores" estilo="col-md-4" name="qtdProcessador" change={this.props.change} value={this.props.servidor.qtdProcessador} />
                    <InputLabel control="hd" label="HD" estilo="col-md" name="hd.quantidadeHD" change={this.props.change} value={this.props.servidor.hd.quantidadeHD} />
                    <SelectUnidade control="hd" label="Unidade HD" estilo="col-md" name="hd.unidadeHD" change={this.props.change} value={this.props.servidor.hd.unidadeHD} />
                    <InputLabel label="Memória" control="memoria" estilo="col-md" name="memoria.quantidadeMemoria" change={this.props.change} value={this.props.servidor.memoria.quantidadeMemoria} />
                    <SelectUnidade label="Unidade Mem." control="memoria" estilo="col-md" name="memoria.unidadeMemoria" change={this.props.change} value={this.props.servidor.memoria.unidadeMemoria} />
                    
                </div>
            </Panel>
        )
    }
}

const mapState = state => ({
    servidor: state.servidor.servidor
})

export default publicaRedux(ServidorCadastro, mapState, {incluir,change,novo, getServidor})