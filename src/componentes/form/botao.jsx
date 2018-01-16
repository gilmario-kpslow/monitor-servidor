import React from 'react'

export default props =>(
    <button className="btn btn-danger form-control" onClick={props.click}><i className={`fa fa-${props.icone}`}></i> {props.label}</button>
)