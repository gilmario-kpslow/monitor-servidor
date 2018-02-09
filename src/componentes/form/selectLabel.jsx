import React from 'react'

export default props => (
    <div className={props.estilo}>
        <label htmlFor={props.id}>{props.label}</label>
        <select className={`form-control form-control-sm ${props.control}`} value={props.value} id={props.id} name={props.name} onChange={props.change}>
            {props.children}
        </select>
    </div>
)
