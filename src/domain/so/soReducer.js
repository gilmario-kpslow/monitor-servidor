import {info} from '../../log/log'
const so = {nome:""}

const INICIAL = {
    lista: [],
    so: so,
}

export default (state = INICIAL, action) => {
    switch (action.type) {
        case 'PESQUISAR_SO':
            return { ...state, lista: action.payload }
        case 'NOVO_SO':
            return { ...state, so: so }
        case 'CHANGE':
            return { ...state, so:{...state.so, ...action.payload}}
        case 'SALVAR_SO':
            return { ...state, so: so }
        case 'VER_SO':
            return { ...state, so: action.payload }
        default: return state
    }
}