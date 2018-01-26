import React, {Component} from 'react'
import Panel from '../../componentes/layout/panel';

class CadastraServico extends Component{

    footer(){
        return(
            <div>
                <button className="btn btn-default">OK</button>
            </div>
        )
    }

    render(){
        return(
            <Panel titulo="Cadastro de Serviço" footer={this.footer()}>
                <div className="row"></div>

            </Panel>
            
        )
    }
}

