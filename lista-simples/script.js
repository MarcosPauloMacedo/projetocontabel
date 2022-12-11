let dados = document.querySelectorAll('.dados')
let quantidade = 0
dados.forEach((i,n)=>{
quantidade++
})

let id = document.querySelectorAll('.id')


//console.log(id)

function descobrir(array){
    let string = 0
    let formatado = 0
    let maiorq7 = 0
    array.forEach((i,n)=>{
        //console.log(i.innerText)
        string = i.innerText
        formatado = string.replace('/','')
        formatado = formatado.replace('-','')

        if(formatado.length > 7){
            maiorq7 ++
            formatado = formatado.replace(formatado[4],'')
            console.log(formatado)
        }
       // console.log(formatado)
    })

    console.log(maiorq7)
}

descobrir(id)