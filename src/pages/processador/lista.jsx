import React, { Component } from 'react'
import Panel from '../../componentes/layout/panel';
import {pesquisar } from '../../domain/processador/processadorAction'
import If from '../../componentes/logica/if'
import {publicaRedux} from '../../componentes/logica/publicaRedux'

class ListaProcessador extends Component {

    componentWillMount(){
        this.props.pesquisar()
    }

    render() {
        return (
            <Panel titulo="Consulta de Processadores">
                <div className="row">
                    <div className="col-md">
                        <table className="table">
                            <thead className="">
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Cash</th>
                                    <th>Nucleos</th> 
                                    <th>Frequência</th> 
                                </tr>
                            </thead>
                            <tbody>
                                <If teste={this.props.lista } vazio="">
                                    {
                                        this.props.lista.map((p) =>(
                                            <tr key={p.id}>
                                                <td>{p.id}</td>
                                                <td>{p.nome}</td>
                                                <td>{p.memoriaCash} Mb</td>
                                                <td>{p.cores}</td>
                                                <td>{p.frequencia} Ghz</td>
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
export default publicaRedux(ListaProcessador, mapState,{pesquisar})