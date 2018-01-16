import {info} from '../../log/log'
const servidor = { nome: '', ip: '', descricao: '', funcionalidade: '', sistemaOperacional: {id:''}, hd: {quantidadeHD:'', unidadeHD:'KB'}, memoria: {quantidadeMemoria:'',unidadeMemoria:'KB'}, processador: {id:''} ,tipo:'Host',qtdProcessador:"1"}

const INICIAL = {
    lista: [],
    servidor: servidor,
    servicos: [{nome:"Serviço 01"},{nome:"servico numero 2"}]
}

export default (state = INICIAL, action) => {
    switch (action.type) {
        case 'PESQUISAR':
            return { ...state, lista: action.payload }
        case 'NOVO':
            return { ...state, servidor: INICIAL.servidor }
        case 'CHANGE':
            return { ...state, servidor:{...state.servidor, ...action.payload} }
        case 'ADD_SERVIDOR':
            return { ...state, servidor: servidor }
        case 'VIEW':
            return { ...state, servidor: action.payload }
        default: return state
    }
}

