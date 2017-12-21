export const info = (log) =>{
    if(process.env.NODE_ENV !==  'production'){
        console.log(log)
    }
}

export const erro = (log) =>{
    if(process.env.NODE_ENV !==  'production'){
        console.log(log)
    }
}