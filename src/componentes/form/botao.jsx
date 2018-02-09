import React from 'react'

export default props =>(
    <button className={`btn btn-${props.cor ? psops.cor : 'primary'} form-control`} onClick={props.click}><i className={`fa fa-${props.icone? props.icone:'check'}`}></i> {props.label}</button>
)