export class Lista{
    constructor(){
        this.codigo = []
        this.contador = 0
    }

    push(id,codigo){
        this.codigo[this.contador] = {
        'id': id,
        'anexo': codigo
        }
        this.contador++
    }

    mostrarLista(){
        console.table(this.codigo[2].id)
    }
}

