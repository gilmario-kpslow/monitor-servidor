import { combineReducers } from 'redux'
import servidorReducer from '../domain/servidor/servidorReducer'
import servicoReducer from '../domain/servico/servicoReducer'
import soReducer from '../domain/so/soReducer'
import processadorReducer from '../domain/processador/processadorReducer'

export const reducers = combineReducers({
    servidor: servidorReducer,
    servico: servicoReducer,
    so: soReducer,
    processador: processadorReducer
})