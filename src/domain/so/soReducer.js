import {info} from '../../log/log'
const so = {nome:""}

const INICIAL = {
    lista: [],
    so: so,
}

export default (state = INICIAL, action) => {
    switch (action.type) {
        case 'PESQUISAR':
            return { ...state, lista: action.payload }
        case 'NOVO':
            return { ...state, so: so }
        case 'CHANGE':
            return { ...state, so:{...state.so, ...action.payload}}
        case 'SALVAR':
            return { ...state, so: so }
        case 'VER':
            return { ...state, so: action.payload }
        default: return state
    }
}