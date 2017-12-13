import { GET, POST } from './headers'
import { URL } from '../../config/configConstantes'
import { toast } from 'react-toastify'


export const pesquisar = () => {
    return dispacth => {
        const opcoes = {
            method: "get",
            headers: new Headers({
                "Content-Type": "Application/json",
                "Accept": "Application/json",
            })
        }

        fetch(`${URL}/servidor`, opcoes).then(response => {
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

export const incluir = (servidor) => {
    return dispacth => {
        console.log(servidor)
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
                        type: 'SALVOU',
                        payload: servidor
                    })
                } else {
                    mensagem({ tipo: "erro", descricao: "Erro ao cadastrar Servidor" })
                }
            }).catch(error => {
                mensagem({ tipo: "erro", descricao: error.message })
                console.log(error)
            })
    }



}