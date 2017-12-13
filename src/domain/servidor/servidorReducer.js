const servidor = { nome: '', ip: '', descricao: '', funcionalidade: '', sistemaOperacional: '', hd: '', memoria: '', processador: '' ,tipo:'Host',qtdProcessador:"1"}

const INICIAL = {
    lista: [],
    servidor: servidor
}

export default (state = INICIAL, action) => {
    console.log(action)
    switch (action.type) {
        case 'PESQUISAR':
            return { ...state, lista: action.payload }
        case 'CHANGE':
            return { ...state, servidor: {...state.servidor, ...action.payload} }
        case 'SALVOU':
            return { ...state, servidor: servidor }
        default: return state
    }
}

