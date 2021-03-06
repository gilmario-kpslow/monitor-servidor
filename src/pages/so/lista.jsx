import React, { Component } from 'react'
import Panel from '../../componentes/layout/panel';
import {pesquisar } from '../../domain/so/soAction'
import If from '../../componentes/logica/if'
import {publicaRedux} from '../../componentes/logica/publicaRedux'

class ListaSo extends Component {

    componentWillMount(){
        this.props.pesquisar()
    }

    render() {
        return (
            <Panel titulo="Consulta de Sistema Operacional">
                <div className="row">
                    <div className="col-md">
                        <table className="table">
                            <thead className="">
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                </tr>
                            </thead>
                            <tbody>
                                <If teste={this.props.lista } vazio="">
                                    {
                                        this.props.lista.map((so) =>(
                                            <tr key={so.id}>
                                                <td>{so.id}</td>
                                                <td>{so.nome}</td>
                                            </tr>
                                        ))
                                    }
                                </If>                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </Panel>
        )
    }
}

const mapState = state => ({ lista: state.so.lista })
export default publicaRedux(ListaSo, mapState, {pesquisar})