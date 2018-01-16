import React from 'react'


export default props => (
    <header className="wrapper">
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
            <div className="collapse acima" id="navbarToggleExternalContent">
                <div className="bg-dark p-4">
                    {props.children}
                </div>
            </div>
        </div>
        <nav className="navbar navbar-dark navbar-fixed-top bg-dark">
            <a className="navbar-brand" href="#">Monitor</a>
        </nav>
    </header >
)