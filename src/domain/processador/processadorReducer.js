import { info } from '../../log/log'
const processador = { nome: "", cores: "", memoriaCash: "", frequencia: "" }

const INICIAL = {
    lista: [],
    processador: processador,
}

export default (state = INICIAL, action) => {
    switch (action.type) {
        case 'PESQUISAR_PROCESSADOR':
            return { ...state, lista: action.payload }
        case 'CHANGE':
            return { ...state, processador: { ...state.processador, ...action.payload } }
        case 'SALVAR_PROCESSADOR':
            return { ...state, processador: processador }
        default: return state
    }
}