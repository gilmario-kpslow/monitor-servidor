const servico = { nome: ''}

const INICIAL = {
    lista: [],
    servico: servico
}

export default (state = INICIAL, action) => {
    switch (action.type) {
        case 'PESQUISAR':
            return { ...state, lista: action.payload }
        case 'CHANGE':
            return { ...state, servico: {...state.servico, ...action.payload} }
        case 'ADD_SERVICO':
            return { ...state, servico: servico }
        default: return state
    }
}

