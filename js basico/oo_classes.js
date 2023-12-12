// Objetos e classes 


// Objeto um elemento dinamico de chave e valor 
// const breno = {
//     nome : 'Breno',
//     idade : 23,
//     descrever : function(){

//     console.log(`Seu nome: ${this.nome}`);
//     }
// }

// console.log(breno);
// breno.altura = 1.75;
// console.log(breno);

// delete  breno.idade;
// console.log(breno);

// // funcao
// console.log(breno.descrever());


// CLASSES 

// class Pessoa{

//     nome;
//     idade;

//     descrever()
//     {
//         console.log(`Seu nome: ${this.nome}  e sua idade ${this.idade}` );
//     }
// }

// instanciando uma classe 
// const pessoa_1 = new Pessoa();
// pessoa_1.nome = 'Breno';
// pessoa_1.idade = 25;
// pessoa_1.descrever();

// constructor 

// class Pessoa{

//     nome;
//     idade;
//     nascimento;


//     constructor (nome,idade){
//         this.nome = nome;
//         this.idade = idade;
//         this.nascimento = parseInt(2023) - parseInt(idade);
//     }
//     descrever()
//     {
//         console.log(`Seu nome: ${this.nome}  e sua idade ${this.idade},nasceu em`);
//     }
// }

// const pessoa_1 = new Pessoa();
// pessoa_1.nome = 'Breno';
// pessoa_1.idade = 25;
// pessoa_1.descrever();

// console.log(pessoa_1);
// 

class Pessoa{

    nome;
    idade;
    nascimento;
 
    constructor (nome,idade){
        this.nome = nome;
        this.idade = idade;
    
    }

}


// funcao que esta recebendo um objeto de uma classe 
function Comparar(p1,p2){

    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    }
    else if(p1.idade < p2.idade){
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    }else{
        console.log(`Mesma idade`);
    }
}

const breno = new Pessoa('Breno',30);
const jose = new Pessoa('Jose',25);

Comparar(breno,jose);