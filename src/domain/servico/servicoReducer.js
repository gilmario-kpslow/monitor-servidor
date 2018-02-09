const servico = {
    nome: '',
    porta: '',
    tipoServico : 'OUTROS',
    contexto: ''
}

const INICIAL = {
    lista: [],
    servico: servico,
    erros: []
}

export default (state = INICIAL, action) => {
    switch (action.type) {
        case 'PESQUISAR':
            return { ...state,
                lista: action.payload
            }
        case 'CHANGE_SERVICO':
            return { ...state,
                erros: [],
                servico: { ...state.servico,
                    ...action.payload
                }
            }
        case 'NOVO_SERVICO':
            return { ...state,
                erros: [],
                servico: { ...servico,
                    servidor: {
                        id: action.payload
                    }
                }
            }
        case 'VER_SERVICO':
            return { ...state,
                servico: action.payload
            }
        case 'ERRO_SERVICO':
            return { ...state,
                erros: action.payload
            }
        default:
            return state
    }
}
