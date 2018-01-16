import React, { Component } from 'react'
import Panel from '../../componentes/layout/panel';
import Botao from '../../componentes/form/botao';
import { info } from '../../log/log';
import InputLabel from '../../componentes/form/inputLabel';


class ProcessadorCadastro extends Component {

    constructor(props) {
        super(props)

    }

    footer(){
        return (
            <Botao icone="disk" label="Salvar" click={() => {info("OK")}}/>
        )
    }

    render() {
        return(
            <Panel titulo="Cadastro de Processador" footer={this.footer()}>
                <InputLabel label="Nome"/>
            </Panel>
        )
    }
}

export default ProcessadorCadastro