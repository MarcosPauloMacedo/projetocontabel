class Cnae{
    constructor(){
        this.codigo = {}
        this.contador = 0
    }

    push(id,codigo){
        this.codigo[this.contador] = {
            'id': id,
            'cod': codigo
        }

        this.contador++
    }
}

const cnae = new Cnae()

let cod = {
    'id': '11',
    'cod': 'a'
}

cnae.push('33221','a')
cnae.push('443321','b')

console.table(cnae.codigo)

