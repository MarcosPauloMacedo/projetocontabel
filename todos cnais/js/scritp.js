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
      console.log(data)
      //pesquisar.buscarId(data)
      pesquisar.contador(data)
       })
    })
.catch(e =>{console.log(`deu erro ${e}`)})

let cnae = {
    'id':'233221',
    'simples':'sim',
    'anexo':'II - III',
    'aliq': '4,5%',
    'descricao':'gado de corte'
}