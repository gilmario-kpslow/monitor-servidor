import React from 'react'

export default props => (
    <div className={props.estilo}>
        <label htmlFor={props.id}>{props.label}</label>
        <select className="form-control" id={props.id}>
            {props.children}
        </select>
    </div>
)
