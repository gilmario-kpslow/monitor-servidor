import { toast } from 'react-toastify'
import { info } from '../../log/log'

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

export const mensagem = (mensagem) => {
    switch (mensagem.tipo) {
        case "erro": toast.error(mensagem.descricao)
            break
        case "sucesso": toast.success(mensagem.descricao)
            break
        default: toast(mensagem.descricao)
    }
}