import { URL } from '../../config/configConstantes'
import { info } from '../../log/log'
import {mensagem, changeInput} from '../padrao/actionPadrao'

export const pesquisar = () => {
    return dispacth => {
        const opcoes = {
            method: "get",
            headers: new Headers({
                "Content-Type": "Application/json",
                "Accept": "Application/json",
            })
        }
        info('Iniciando pesquisa')
        fetch(`${URL}/servidor`, opcoes).then(response => {
            if (response.ok) {
                dispacth({ type: 'PESQUISAR_SERVIDOR', payload: response.json() })
            } else {
                info('Erro ao consultar')
                mensagem({ tipo: "erro", response })
            }
        }).catch(err => {
            info('Erro no fetch')
            mensagem({ tipo: "erro", descricao: "Ops!!! Alguma coisa deu errado. Verifique sua conexao com a internet." })
            dispacth({ type: 'PESQUISAR_SERVIDOR', payload: [] })
        })
    }
}

export const novo = () => {
    return { type: "NOVO_SERVIDOR", payload: "" }
}

export const change = (event) =>(
    {type:"CHANGE_SERVIDOR", payload:changeInput(event)}
)

export const incluir = (servidor) => {
    info(JSON.stringify(servidor))

    return dispacth => {
        const opcoes = {
            method: "post",
            body: JSON.stringify(servidor),
            headers: new Headers({
                "Content-Type": "Application/json",
                "Accept": "Application/json",
            })
        }
        info("iniciando add")
        fetch(new Request(`${URL}/servidor`, opcoes))
            .then(response => {
                info("response ok")
                if (response.ok) {
                    mensagem({ tipo: "sucesso", descricao: "Servidor cadastrado" })
                    dispacth({
                        type: 'SALVAR_SERVIDOR',
                        payload: servidor
                    })
                } else {
                  response.json().then(validacoes => {
                    validacoes.forEach(e => {
                        mensagem({
                            tipo: "erro",
                            descricao: e.mensagem
                        })
                    });
                    const invalidos = []
                    validacoes.forEach(e => (
                        invalidos[e.elemento] = e.mensagem
                    ))
                    dispacth({
                        type: 'ERRO_SERVIDOR',
                        payload: invalidos
                    })
                })
                }
            }).catch(error => {
                info(error)
                mensagem({ tipo: "erro", descricao: error.message })
            })
    }
}

export const getServidor = id => {

    info(id)
    return dispacth => {
        const opcoes = {
            method: "get",
            headers: new Headers({
                "Content-Type": "Application/json",
                "Accept": "Application/json",
            })
        }
        info('Iniciando view' + id)
        fetch(`${URL}/servidor/${id}`, opcoes).then(response => {
            if (response.ok) {
                dispacth({ type: 'VER_SERVIDOR', payload: response.json() })
            } else {
                info('Erro ao consultar')
                mensagem({ tipo: "erro", response })
            }
        }).catch(err => {
            info('Erro no fetch')
            mensagem({ tipo: "erro", descricao: err.message })
            dispacth({ type: 'VER_SERVIDOR', payload: '' })
        })
    }
}

