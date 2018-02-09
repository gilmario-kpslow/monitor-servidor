import {URL} from '../../config/configConstantes'
import {toast} from 'react-toastify'
import {info} from '../../log/log'
import {changeInput} from '../padrao/actionPadrao'

export const pesquisar = (id) => {
    return dispacth => {
        const opcoes = {
            method: "get",
            headers: new Headers({
                "Content-Type": "Application/json",
                "Accept": "Application/json",
            })
        }
        info('iniciando pesquisa')
        fetch(`${URL}/servico/${id}`, opcoes).then(response => {
            if (response.ok) {
                info('sucesso pesquisa')
                dispacth({
                    type: 'PESQUISAR',
                    payload: response.json()
                })
            } else {
                info('erro pesquisa')
                mensagem({
                    tipo: "erro",
                    response
                })
            }
        }).catch(err => {
            info('erro pesquisa 2')
            mensagem({
                tipo: "erro",
                descricao: err.message + ' - ' + err
            })
        })
    }
}

const mensagem = (mensagem) => {
    switch (mensagem.tipo) {
        case "erro":
            toast.error(mensagem.descricao)
            break
        case "sucesso":
            toast.success(mensagem.descricao)
            break
        default:
            toast(mensagem.descricao)
    }
}

export const incluir = (servico) => {

    info(JSON.stringify(servico))
    return dispacth => {
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
                    mensagem({
                        tipo: "sucesso",
                        descricao: "servico cadastrado"
                    })
                    dispacth(
                        novo(servico.servidor.id)
                    )
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
                            type: 'ERRO_SERVICO',
                            payload: invalidos
                        })
                    })
                }
            }).catch(error => {
                mensagem({
                    tipo: "erro",
                    descricao: error.message
                })
            })
    }
}

export const novo = (id) => ({
    type: "NOVO_SERVICO",
    payload: id
})

export const change = (event) => ({
    type: "CHANGE_SERVICO",
    payload: changeInput(event)
})
