import React, { Component } from 'react'
import InputLabel from '../../componentes/form/inputLabel'
import { incluir, change, novo } from '../../domain/so/soAction'
import { info } from '../../log/log'
import Panel from '../../componentes/layout/panel'
import {publicaRedux} from '../../componentes/logica/publicaRedux'

class SoCadastro extends Component {

    constructor(props) {
        super(props)
    }

    footer() {
        return (<button className="btn btn-primary btn-sm form-control flutuante" onClick={() => { this.props.incluir(this.props.so) }}><i className="fa fa-save"></i> Salvar</button>)
    }

    render() {
        return (
            <div>
                <Panel stilo="col-md-6 col-md-auto" titulo="Cadastro de Sistema Operacional" footer={this.footer()}>
                    <div className="row">
                        <InputLabel estilo={`form-control-sm col-md`} erros={this.props.erros} label="Nome" value={this.props.so.nome} name="nome" change={this.props.change} />
                    </div>
                </Panel>
            </div>
        )
    }
}

const mapState = state => ({
    so: state.so.so,
    erros: state.so.erros
})
export default publicaRedux(SoCadastro,mapState,{ incluir, change, novo })

