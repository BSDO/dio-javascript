const {gets,print} = require('./import_export.js');

// Mostrando o que vem na importacao do arquivo
//onsole.log(funcoes);

// // usando as funcao diretamente
// //  const nrsorteado = [];
// const qtd = gets();
// let maior = 0;

// for(let i = 0; i < qtd ; i++)
// {
//     const nrsorteado = gets();

//     if(nrsorteado > maior){

//         maior = nrsorteado;
       
//     }
//     // nrsorteado.push(nrsorteados);
// }

// print(maior);


// for(let i = 0; i < nrsorteado.length ; i++)
// {
//     numerosorteado = nrsorteado[i];
//     if(numerosorteado > maior){
//         maior = numerosorteado;
       
//     }
// }

// console.log(maior);


let media = gets(8);

if (media < 5) {
  print('REP');
}else if(media >= 5 and media < 7  ){
    print('REC');
}
else{
    print('APR')
}