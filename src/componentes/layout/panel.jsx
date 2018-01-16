import React from 'react'

export default props => (
    <section className="row">
        <div className="col-md-12">
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">{props.titulo}</h4>
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