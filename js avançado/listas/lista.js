
//  foreach


// lista.forEach((value,i) =>{
//     console.log(value  + ' --- ' + i)
// })


// O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
// const novalista = lista.filter((elemento) => elemento % 2 === 0);
// console.log(novalista);

// map método Array.map() normalmente é usado para aplicar algumas alterações aos elementos, seja multiplicando-os por um número específico, seja fazendo outras operações que você necessite utilizar em sua aplicação.

class Pessoa {
    constructor(nome,idade)
    {
        this.nome = nome
        this.idade = idade
    }
}

const lista2 = [new Pessoa('Jose',30),new Pessoa('Pedro',20),new Pessoa('Breno',23),new Pessoa('Bruno',45)];


let nomelista = lista2.map((elemento) =>{
    return elemento.nome + ' tem ' + elemento.idade + ' anos.'
});

 console.log(nomelista);


// const listamultiplicada = lista.map((elemento) => elemento + 1);
// console.log(lista);
// console.log('---------');
// console.log(listamultiplicada);



// Reduce - reduzir a um unico valor

// const lista = [1,2,3,4,5,6,7,8,9,10];

// const listanova = lista.reduce((previous,current) =>{
//     console.log(previous +  '-----' + current)
//     return previous + current
// })


// const lista = [1,2,3,4];

// const novalista = lista.map((elemento) => elemento).join('-*---');
// console.log(novalista);


const lista = [{nome:'Bro'},{nome:'Bruno'},{nome:'Areno'},{nome:'Joreno'}];

// busca somente os nomes / depois filtra ele e o join vai seperar cada
const filtro = lista.map((e) => `${e.nome}`)
                    .filter((e) => e.length > 3)                    
                    .join('-')
console.log(filtro);
