import {
    info
} from '../../log/log'
const so = {
    nome: ""
}

const INICIAL = {
    lista: [],
    so: so,
    erros: []
}

export default (state = INICIAL, action) => {
    switch (action.type) {
        case 'PESQUISAR_SO':
            return { ...state,
                lista: action.payload
            }
        case 'NOVO_SO':
            return { ...state,
                so: so,
                erros: []
            }
        case 'CHANGE_SO':
            return { ...state,
                so: { ...state.so,
                    ...action.payload
                },
                erros: []
            }
        case 'SALVAR_SO':
            return { ...state,
                so: so,
                erros: []
            }
        case 'ERRO_SO':
            return { ...state,
                erros: action.payload
            }
        case 'VER_SO':
            return { ...state,
                so: action.payload
            }
        default:
            return state
    }
}
