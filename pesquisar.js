export class Pesquisar{
    constructor(){
        this.buscar = document.querySelector
        .bind(document)

        this.form = this.buscar('.formulario')
        this.resultado = this.buscar('.resultado')
        this.pesquisa = this.buscar('.pesquisar')
        this.descricao = this.buscar('.descricao')
    }

    buscarId(array){
        this.form.onsubmit = (event)=>{
            event.preventDefault()
            let i = 0
            for(i;i<array.length;i++){
                console.log(this.pesquisa.value)
                if(this.pesquisa.value == array[i].id){
                    //console.log(array[i].descricao)
                    this.resultado.value = array[i].classe.descricao
                    this.descricao.value = array[i].observacoes[0]
                    break
                }
            }
        }
    }

    numeroDescricao(array){
        let descricao = array[0].descricao
        console.log(descricao)
        let quantidade = 0

        array.forEach((i,n)=>{
            if(i.descricao != descricao){
                descricao = i.descricao
                quantidade++
            }
        })

        console.log(quantidade)
    }
}