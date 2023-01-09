import { Lista } from "./Lista.js"

const lista = new Lista()

let id = document.querySelectorAll('.id')
let anexo = document.querySelectorAll('.anexo')
let botton = document.querySelector('.botao')
let form = document.querySelector('.formulario')

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

function enviarArray(){
    idFormatado.forEach((n,i)=>{
        lista.push(n,anexoFormatado[i])
    })
}

function enviarPHP(array){
    array.forEach((n)=>{
        let inputId = document.createElement('input')
        inputId.value = n.id
        inputId.name = 'id[]'
        inputId.type = 'hidden'

        let inputAnexo = document.createElement('input')
        inputAnexo.value = n.anexo
        inputAnexo.name = 'anexo[]'
        inputAnexo.type = 'hidden'

        form.appendChild(inputId)
        form.appendChild(inputAnexo)
    })
}

padronizarNumeros(id)
padronizarAnexo(anexo)
enviarArray()
botton.addEventListener('click',enviarPHP(lista.codigo))
