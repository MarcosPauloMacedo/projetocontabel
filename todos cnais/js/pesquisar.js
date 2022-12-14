export class Pesquisar{
    constructor(){
        this.buscar = document.querySelector
        .bind(document)

        this.form = this.buscar('.formulario')
        this.resultado = this.buscar('.resultado')
        this.pesquisa = this.buscar('.pesquisar')
        this.todasDescricao = this.buscar('.todas-descricao')
        this.descricao = this.buscar('.descricao')
    }

    _criarDescricao(texto){
        let p = document.createElement('li')
        p.innerText = `* ${texto}`
        p.classList.add('descricao')

        this.todasDescricao.appendChild(p)
    }

    buscarId(array){
        this.form.onsubmit = (event)=>{
            event.preventDefault()
            let i = 0

            while (this.todasDescricao.hasChildNodes()) {
              this.todasDescricao.removeChild(this.todasDescricao.firstChild);
            }

            for(i;i<array.length;i++){
                if(this.pesquisa.value == array[i].id){
                    this.resultado.value = array[i].classe.descricao
                    this._criarDescricao(array[i].atividades)
                    
                    if(array[i+1].id != this.pesquisa.value){
                        break
                    }  
                }
            }  
        }
    }

    contador(array){
        let posicao1 = array[0].id
        let quantidadeId = 0

        array.forEach((i,n)=>{
            if(i.id != posicao1){
                quantidadeId++
                posicao1 = i.id
            }
        })

        console.log(quantidadeId)
    }
}