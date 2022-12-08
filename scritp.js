
let linkApi = 'https://servicodados.ibge.gov.br/api/v2/cnae/classes/'
let options = {
    method: 'Get',
    mode: 'cors',
    cache: 'default'
}

let valor = 0

fetch(linkApi,options)
    .then(response => {response.json()
        .then(data => { valor = (data)
            console.log(valor)
        })
    })
.catch(e =>{console.log(`deu erro ${e}`)})



