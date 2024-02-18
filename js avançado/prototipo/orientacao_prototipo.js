// // Orientaçãoa a prototipo : 

// const pessoa = { genero : 'Masculino'}


// //herdar a pessoa dentro de Breno
// const breno = {
//     nome : 'Breno',
//     idade : 23,
//     __proto__ : pessoa // Protipo de pessoa
// }

// // console.log(breno.genero)

// // funcao constrututa

// function Pessoa(nome,idade)
// {
//     this.nome = nome
//     this.idade = idade

   
// }

// Pessoa.prototype.fala = function(){
//     console.log(`${this.nome} ,seja bem vindo, vi que voce tem ${this.idade}`)
// }


// const breno1 = new Pessoa('Breno',30)
// console.log(breno1.fala())



// criar usando o prototype

const pessoa = {
    nome : 'Breno'
}

const breno = Object.create(pessoa)

//adicionado objetos dentro do onjeto pessoa
breno.idade = 30
breno.profissao = 'Analista de Sistemas'

console.log(breno)