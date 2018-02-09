import React, { Component } from 'react'
import { pesquisar } from '../../domain/so/soAction'
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
            <SelectLabel label={this.props.label} control={this.props.control} estilo={this.props.estilo} name={this.props.name} change={this.props.change} value={this.props.value}>
                <option value=""></option>
                {
                    this.props.lista.map(so => (
                        <option key={so.id} value={so.id}>{so.nome}</option>
                    ))
                }
            </SelectLabel>
        )
    }
}

const mapState = state => ({
    lista: state.so.lista
})

export default publicaRedux(SelectSo, mapState, { pesquisar })
