import { URL } from '../../config/configConstantes'
import { info } from '../../log/log'
import {mensagem} from '../padrao/actionPadrao'

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
            mensagem({ tipo: "erro", descricao: err.message })
            dispacth({ type: 'PESQUISAR_SERVIDOR', payload: [] })
        })
    }
}

export const novo = () => {
    return { type: "NOVO_SERVIDOR", payload: "" }
}

export const incluir = (servidor) => {
    return dispacth => {
        const opcoes = {
            method: "post",
            body: JSON.stringify(servidor),
            headers: new Headers({
                "Content-Type": "Application/json",
                "Accept": "Application/json",
            })
        }

        fetch(new Request(`${URL}/servidor`, opcoes))
            .then(response => {
                if (response.ok) {
                    mensagem({ tipo: "sucesso", descricao: "Servidor cadastrado" })
                    dispacth({
                        type: 'SALVAR_SERVIDOR',
                        payload: servidor
                    })
                } else {
                    mensagem({ tipo: "erro", descricao: "Erro ao cadastrar Servidor" })
                }
            }).catch(error => {
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

