import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import If from './If'

class Mensagem extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                    {
                        console.log(this.props.mensagens)
                        }
            </div>
        )
    }
}

const mapState = state => ({
    mensagens: state.servidor.mensagens
})



export default connect(mapState)(Mensagem)