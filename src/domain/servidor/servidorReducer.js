import {
    info
} from '../../log/log'
const servidor = {
    nome: '',
    ip: '',
    descricao: '',
    funcionalidade: '',
    sistemaOperacional: {
        id: ''
    },
    hd: {
        quantidadeHD: '',
        unidadeHD: 'KB'
    },
    memoria: {
        quantidadeMemoria: '',
        unidadeMemoria: 'KB'
    },
    processador: {
        id: ''
    },
    tipo: 'Virtual',
    qtdProcessador: '1'
}

const INICIAL = {
    lista: [],
    erros: [],
    servidor: servidor,
    servicos: [{
        nome: "Serviço 01"
    }, {
        nome: "servico numero 2"
    }]
}

export default (state = INICIAL, action) => {
    switch (action.type) {
        case 'PESQUISAR_SERVIDOR':
            return { ...state,
                lista: action.payload
            }
        case 'NOVO_SERVIDOR':
            return { ...state,
                servidor: INICIAL.servidor,
                erros: []
            }
        case 'CHANGE_SERVIDOR':
            return { ...state,
                erros: [],
                servidor: { ...state.servidor,
                    ...action.payload
                }
            }
        case 'SALVAR_SERVIDOR':
            return { ...state,
                servidor: servidor
            }
        case 'ERRO_SERVIDOR':
            return { ...state,
                erros: action.payload
            }
        case 'VER_SERVIDOR':
            return { ...state,
                servidor: action.payload
            }
        default:
            return state
    }
}
