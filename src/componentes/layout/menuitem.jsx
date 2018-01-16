import React from 'react'
import { Link } from 'react-router-dom'


export default props => (
    <Link to={props.para} className="nav-link">
        {props.label}
    </Link>
)