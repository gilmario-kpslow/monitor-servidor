import React from 'react'

export default props => {
    
    return(
        <div className="dropdown">
            <button className={`btn btn-${props.cor} dropdown-toggle`} type="button" id={props.id} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className={`fa fa-${props.icone}`}></i> {props.label}
            </button>
            <div className="dropdown-menu" aria-labelledby={props.id}>
                {props.children}
            </div>
        </div>
    )
}