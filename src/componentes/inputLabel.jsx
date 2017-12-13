import React from 'react'

export default props => (
    <div className={props.estilo}>
        <label htmlFor={props.id}>{props.label}</label>
        <input type="text" value={props.value} name={props.name} id={props.id} className="form-control" onChange={props.change} maxLength={props.maxLength}/>
    </div>
)
