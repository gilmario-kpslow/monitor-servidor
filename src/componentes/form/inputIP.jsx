import React from 'react'

export default props => {
    
    return(
    <div className={props.estilo}>
        <label htmlFor={props.id}>{props.label}</label>
        <input type="text" value={mask(props.value)} name={props.name} id={props.id} className="form-control" onChange={props.change} maxLength={props.maxLength}/>
    </div>
    )
}
