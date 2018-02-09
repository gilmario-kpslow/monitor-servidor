import React from 'react'

export default props => (
    <section className="row justify-content-center">
        <div className={props.stilo ? props.stilo : 'col-md-12'}>
            <div className="card">
                <div className="card-header">
                    <label className="font-weight-bold">{props.titulo}</label>
                </div>
                <div className="card-body">
                    {props.children}
                </div>
                <div className="card-footer text-muted">
                    <div className="row">
                        <div className="col-md-2">
                            {props.footer}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section >

)