import React, { Component } from 'react'
import { pesquisar } from '../../domain/processador/processadorAction'
import SelectLabel from '../../componentes/form/selectLabel'
import { publicaRedux } from '../../componentes/logica/publicaRedux'


class SelectSo extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.pesquisar()
    }

    render() {
        return (
            <SelectLabel label={this.props.label} control={this.props.control} estilo={this.props.estilo} name={this.props.name} change={this.props.change} defaultValue={this.props.value}>
                {
                    this.props.listaProcessador.map(p => (
                        <option key={p.id} value={p.id}>{p.nome}</option>
                    ))
                }
            </SelectLabel>
        )
    }
}

const mapState = state => ({
    listaProcessador: state.processador.lista
})

export default publicaRedux(SelectSo, mapState, { pesquisar })