// IMPORT E EXPORTAÇÃO DE MODULOS EM JS

const entrada = [5,50,10,98,23];
let i = 0;



// function gets(){
//     valor = entrada[i];
//     i++; 
//     return valor;
    
// }


function print(text){
    console.log(text);
}

// esportando funcoes pra usar
module.exports = {
    gets : gets,
    print : print
} 