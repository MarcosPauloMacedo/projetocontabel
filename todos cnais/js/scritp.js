import {Pesquisar} from './pesquisar.js'
import {Pilha} from './pilha.js'

const pesquisar = new Pesquisar()
const pilha = new Pilha()

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
        //console.log(data)
        pesquisar.buscarId(data)
        pilha.push(data)
       })
    })
.catch(e =>{console.log(`deu erro ${e}`)})


