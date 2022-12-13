import { Lista } from "./Lista.js"

const lista = new Lista()

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
        anexoFormatado.push(n.textContent)
    })
}

padronizarNumeros(id)
padronizarAnexo(anexo)

//console.log(anexoFormatado)
let i = 0
console.log(idFormatado.length)
for(i;i < idFormatado.length ; i++){
    lista.push(idFormatado[i],anexoFormatado[i])
}

lista.mostrarLista()


