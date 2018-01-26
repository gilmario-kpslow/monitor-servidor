import { URL } from '../../config/configConstantes'
import { toast } from 'react-toastify'
import { info } from '../../log/log'
import { mensagem } from '../padrao/actionPadrao';


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
        fetch(`${URL}/so`, opcoes).then(response => {
            if (response.ok) {
                dispacth({ type: 'PESQUISAR_SO', payload: response.json() })
            } else {
                info('Erro ao consultar')
                mensagem({ tipo: "erro", response })
            }
        }).catch(err => {
            info('Erro no fetch')
            mensagem({ tipo: "erro", descricao: err.message })
            dispacth({ type: 'PESQUISAR_SO', payload: [] })
        })
    }
}

export const novo = () => {
    return { type: "NOVO_SO", payload: {} }
}

export const incluir = (so) => {
    return dispacth => {
        const opcoes = {
            method: "post",
            body: JSON.stringify(so),
            headers: new Headers({
                "Content-Type": "Application/json",
                "Accept": "Application/json",
            })
        }

        fetch(new Request(`${URL}/so`, opcoes))
            .then(response => {
                if (response.ok) {
                    mensagem({ tipo: "sucesso", descricao: "Sistema Operacional cadastrado" })
                    dispacth({
                        type: 'SALVAR_SO',
                        payload: so
                    })
                } else {
                    mensagem({ tipo: "erro", descricao: "Erro ao cadastrar Sistema Operacional" })
                }
            }).catch(error => {
                mensagem({ tipo: "erro", descricao: error.message })
            })
    }
}

export const getSo = id => {

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
        fetch(`${URL}/so/${id}`, opcoes).then(response => {
            if (response.ok) {
                dispacth({ type: 'VER_SO', payload: response.json() })
            } else {
                info('Erro ao consultar')
                mensagem({ tipo: "erro", response })
            }
        }).catch(err => {
            info('Erro no fetch')
            mensagem({ tipo: "erro", descricao: err.message })
            dispacth({ type: 'VER_SO', payload: '' })
        })
    }
}

