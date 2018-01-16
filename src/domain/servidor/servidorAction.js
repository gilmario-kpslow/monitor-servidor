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
        fetch(`${URL}/servidor`, opcoes).then(response => {
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

const processaPropriedades = (name) =>{
    const prop = name.split('.')[0]
    const comps = document.getElementsByClassName(prop)
    const newObj = {}
    for(let i = 0 ;i<comps.length;i++){
        const c = comps.item(i)
        const v = c.value
        const p = c.name.replace(`${prop}.`,'')
        newObj[p] = v
    }
    return  { [prop]: newObj }
}

export const change = (event) => {
    const value = event.target.value
    const name = event.target.name
    if (name.includes('.')) {
        const processado = processaPropriedades(name)
        return { type: "CHANGE", payload: processado}
    }
    return { type: "CHANGE", payload: { [name]: value } }
}

export const atualizaCampo = (name, value) => {
    return { type: "CHANGE", payload: { [name]: value } }
}

export const novo = () => {
    return { type: "NOVO", payload: "" }
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
                        type: 'ADD_SERVICO',
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

