import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import InputLabel from '../../componentes/form/inputLabel'
import {incluir, change, novo} from '../../domain/so/soAction'
import { info } from '../../log/log'
import Panel from '../../componentes/layout/panel'

class SoCadastro extends Component {

    constructor(props) {
        super(props)
    }

    footer(){
        return(<button className="btn btn-danger form-control" onClick={() => { this.props.incluir(this.props.so) }}><i className="fa fa-disk"></i> Salvar</button>)
    }

    render() {
        return (
            <div>
                <Panel titulo="Cadastro de Sistema Operacional" footer={this.footer()}>
                    <div className="row">
                        <InputLabel estilo="col-md" label="Nome" value={this.props.so.nome} name="nome"  change={this.props.change}/>

                    </div>
                </Panel>
            </div>

        )


    }


}

const mapState = state => ({
    so: state.so.so
})

const actions = (dispach) => bindActionCreators({ incluir, change, novo }, dispach)
export default connect(mapState, actions)(SoCadastro)