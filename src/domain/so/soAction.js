import {URL} from '../../config/configConstantes'
import {info} from '../../log/log'
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
        fetch(`${URL}/so`, opcoes).then(response => {
            if (response.ok) {
                dispacth({
                    type: 'PESQUISAR_SO',
                    payload: response.json()
                })
            } else {
                info('Erro ao consultar')
                mensagem({
                    tipo: "erro",
                    response
                })
            }
        }).catch(err => {
            info(err)
            mensagem({
                tipo: "erro",
                descricao: err.message
            })
            dispacth({
                type: 'PESQUISAR_SO',
                payload: []
            })
        })
    }
}

export const incluir = (so) => {

    info(JSON.stringify(so))
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
                    mensagem({
                        tipo: "sucesso",
                        descricao: "Sistema Operacional cadastrado"
                    })
                    dispacth({
                        type: "NOVO_SO",
                        payload: {}
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
                            type: 'ERRO_SO',
                            payload: invalidos
                        })
                    })
                }
            }).catch(error => {
                info(error)
                mensagem({
                    tipo: "erro",
                    descricao: "Ops!!! Alguma coisa deu errado. Verifique sua conexao com a internet."
                })
            })
    }
}



export const getSo = id => {

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
                dispacth({
                    type: 'VER_SO',
                    payload: response.json()
                })
            } else {
                info('Erro ao consultar')
                mensagem({
                    tipo: "erro",
                    response
                })
            }
        }).catch(err => {
            info('Erro no fetch')
            mensagem({
                tipo: "erro",
                descricao: err.message
            })
            dispacth({
                type: 'VER_SO',
                payload: ''
            })
        })
    }
}

export const change = (event) =>(
    {type: "CHANGE_SO", payload: changeInput(event)}
)

