import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export const publicaRedux = (component, mapState = {},mapActions)=>{
    const mapdispatcToProps = dispacth => bindActionCreators({ ...mapActions }, dispacth)
    return connect(mapState, mapdispatcToProps)(component)
}



