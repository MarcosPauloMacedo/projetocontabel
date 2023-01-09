export class Pilha{
    constructor(){
        this.contar = 0
        this.itens = {}
        this.bot = document.querySelector('.bot')
    }

    _mostrarEstrutura(){
        console.log(this.itens[0])
    }

    _ajax(obj){
        let linkApi = 'cadastrar.php'
        let options = {
        method: 'POST',
        body: JSON.stringify(obj),
        cache: 'default'
        }

        fetch(linkApi,options)
        .then(response => {response.json()
        .then(data => {(data)
        //console.log(data)
            })
        })
        .catch(e =>{console.log(`deu erro ${e}`)})
    }

    push(array){

        this.bot.onclick = ()=>{
            array.forEach((i)=>{
                this.itens[this.contar] = {
                    'id' : i.id,
                    'atividade' : i.atividades,
                    'descricao' : i.descricao
                }

                console.log(i.id)}
            )
        }
    } 
    
    //this._mostrarEstrutura()
}