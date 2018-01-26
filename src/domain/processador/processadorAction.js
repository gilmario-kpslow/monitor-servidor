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
        fetch(`${URL}/processador`, opcoes).then(response => {
            if (response.ok) {
                dispacth({ type: 'PESQUISAR_PROCESSADOR', payload: response.json() })
            } else {
                info('Erro ao consultar')
                mensagem({ tipo: "erro", response })
            }
        }).catch(err => {
            info('Erro no fetch')
            mensagem({ tipo: "erro", descricao: err.message })
            dispacth({ type: 'PESQUISAR_PROCESSADOR', payload: [] })
        })
    }
}

export const novo = () => {
    return { type: "NOVO", payload: {} }
}

export const incluir = (processador) => {
    return dispacth => {
        const opcoes = {
            method: "post",
            body: JSON.stringify(processador),
            headers: new Headers({
                "Content-Type": "Application/json",
                "Accept": "Application/json",
            })
        }

        fetch(new Request(`${URL}/processador`, opcoes))
            .then(response => {
                if (response.ok) {
                    mensagem({ tipo: "sucesso", descricao: "Cadastrado com sucesso!" })
                    dispacth({
                        type: 'SALVAR_PROCESSADOR',
                        payload: processador
                    })
                } else {
                    mensagem({ tipo: "erro", descricao: "Erro ao cadastrar Sistema Operacional" })
                }
            }).catch(error => {
                mensagem({ tipo: "erro", descricao: error.message })
            })
    }
}

export const getProcessador = id => {

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
        fetch(`${URL}/processador/${id}`, opcoes).then(response => {
            if (response.ok) {
                dispacth({ type: 'VIEW_PROCESSADOR', payload: response.json() })
            } else {
                info('Erro ao consultar')
                mensagem({ tipo: "erro", response })
            }
        }).catch(err => {
            info('Erro no fetch')
            mensagem({ tipo: "erro", descricao: err.message })
            dispacth({ type: 'VIEW', payload: '' })
        })
    }
}