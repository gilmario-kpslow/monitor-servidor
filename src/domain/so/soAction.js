import { URL } from '../../config/configConstantes'
import { toast } from 'react-toastify'
import { info } from '../../log/log'

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
                dispacth({ type: 'PESQUISAR', payload: response.json() })
            } else {
                info('Erro ao consultar')
                mensagem({ tipo: "erro", response })
            }
        }).catch(err => {
            info('Erro no fetch')
            mensagem({ tipo: "erro", descricao: err.message })
            dispacth({ type: 'PESQUISAR', payload: [] })
        })
    }
}

const mensagem = (mensagem) => {
    switch (mensagem.tipo) {
        case "erro": toast.error(mensagem.descricao)
            break
        case "sucesso": toast.success(mensagem.descricao)
            break
        default: toast(mensagem.descricao)
    }
}



export const change = (event) => {
    const value = event.target.value
    const name = event.target.name
    return { type: "CHANGE", payload: { [name]: value } }
}

export const novo = () => {
    return { type: "NOVO", payload: {} }
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
                        type: 'SALVAR',
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
                dispacth({ type: 'VIEW', payload: response.json() })
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

