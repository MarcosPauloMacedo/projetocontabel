import {Pesquisar} from './pesquisar.js'

const pesquisar = new Pesquisar()

//let linkApi = 'https://servicodados.ibge.gov.br/api/v2/cnae/classes/'
let linkApi = 'https://servicodados.ibge.gov.br/api/v2/cnae/subclasses/'
let options = {
    method: 'Get',
    mode: 'cors',
    cache: 'default'
}

fetch(linkApi,options)
    .then(response => {response.json()
        .then(data => {(data)
            pesquisar.buscarId(data)
            console.log(data)
        })
    })
.catch(e =>{console.log(`deu erro ${e}`)})

