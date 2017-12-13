import { URL } from '../../config/configConstantes'
import { toast } from 'react-toastify'


export const pesquisar = (id) => {
    return dispacth => {
        const opcoes = {
            method: "get",
            headers: new Headers({
                "Content-Type": "Application/json",
                "Accept": "Application/json",
            })
        }

        fetch(`${URL}/servico/${id}`, opcoes).then(response => {
            if (response.ok) {
                dispacth({ type: 'PESQUISAR', payload: response.json() })
            } else {
                mensagem({ tipo: "erro", response })
            }
        }).catch(err => {
            mensagem({ tipo: "erro", descricao: err.message })
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

export const incluir = (servico) => {
    return dispacth => {
        console.log(servico)
        const opcoes = {
            method: "post",
            body: JSON.stringify(servico),
            headers: new Headers({
                "Content-Type": "Application/json",
                "Accept": "Application/json",
            })
        }

        fetch(new Request(`${URL}/servico`, opcoes))
            .then(response => {
                if (response.ok) {
                    mensagem({ tipo: "sucesso", descricao: "servico cadastrado" })
                    dispacth({
                        type: 'ADD_SERVICO',
                        payload: servico
                    })
                } else {
                    mensagem({ tipo: "erro", descricao: "Erro ao cadastrar servico" })
                }
            }).catch(error => {
                mensagem({ tipo: "erro", descricao: error.message })
                console.log(error)
            })
    }



}