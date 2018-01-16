import React from 'react'

export default props => (
    <div className="nav-link">
        <div>
            <a data-toggle="collapse" href={`#${props.id}`} role="button" aria-expanded="false" aria-controls={props.id}>
                <span>{props.label}</span>
            </a>
        </div>
        <div className="collapse" id={props.id}>
            <div className="nav flex-column">
            {props.children}
            </div>
        </div>
    </div>
)