let id = document.querySelectorAll('.id')
let dados = document.querySelectorAll('.dados')
let anexo = document.querySelectorAll('.anexo')

let idFormatado = []
let anexoFormatado = []

function padronizarNumeros(array){
    let string = 0

    array.forEach((i,n)=>{
        string = i.innerText
        idFormatado.push(string)

        if(idFormatado[n].length > 9){
            idFormatado[n] = string.replace('/','')
            idFormatado[n] = idFormatado[n].replace('-0','')
        }

        else{
            idFormatado[n] = string.replace('/','')
            idFormatado[n] = idFormatado[n].replace('-','')
        }
    })
}

function padronizarAnexo(string){
    string.forEach((n,i)=>{
        console.log(n)
    })
}

console.log(idFormatado)

//padronizarNumeros(id)
padronizarAnexo(anexo)