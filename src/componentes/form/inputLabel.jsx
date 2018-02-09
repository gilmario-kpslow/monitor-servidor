import React from 'react'
import { info } from '../../log/log'

export default props => {
    const erros = props.erros|| []

    return (
        <div className={props.estilo}>
            <label htmlFor={props.id}>{props.label}</label>
            <input type="text" value={props.value} name={props.name} id={props.id} className={`form-control form-control-sm ${props.control} ${erros[props.name] ? 'is-invalid' : ''}`} onChange={props.change} maxLength={props.maxLength} />
            <div className="invalid-tooltip">
                {erros[props.name] ? erros[props.name] : ''}
            </div>
        </div>)
}
