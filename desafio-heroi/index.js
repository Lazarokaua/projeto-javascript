class MundoDosHeroi{
    constructor (nome,idade,tipo, atacou ){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.atacou = atacou;
    }

}

function atacar() {
    console.log (`Eu sou ${this.tipo} meu atack e  ${this.atacou}`)
}


     

 
let tipoDoHeroi = new MundoDosHeroi ("izaias",21,"mago", "magia")

tipoDoHeroi.atacar = atacar; 

tipoDoHeroi.atacar();