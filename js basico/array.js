// Arrays

// const nomes = ['Breno','Jose','Teste'];

// for(i = 0; i < nomes.length; i++){
//     console.log(nomes[i]);
// }

// #adiciona na lista

// nomes.push('Brenoooo');
// nomes.push(30);
// nomes.push(25);
// nomes.push('Brenoo');
// console.log(nomes);

// // remover o ultimo
// nomes.pop();
// console.log(nomes);
// // o primeirop
// nomes.shift();
// console.log(nomes);


// const notas = [10,9,6,7,6];
// console.log(notas);
// soma = 0;

// for (let i = 0; i < notas.length; i++){
//     const nota = notas[i]
//     soma = soma + nota;


// }
// resultado = parseFloat( soma / notas.length);
    
// console.log("Media do semestre:" + resultado);

// const numero  = 2;

// for(let i = 0; i < 11; i++)
// {
//     tabuada = numero * i;
//     console.log(numero + " * " +  i + " = " + tabuada);
// }

// for(let i = 0; i < 100; i++)
// {
//     par = i % 2;

//     if(par == 0){
//         console.log("Esse número: " + i + " é par !");
//     }else
//     {
//         console.log("Esse número: " + i + " é impar !");
//     }
// }

const numeros =  [10,60,69,4,69,7,3,3,4,5,78,41,26,85,36,941,36421,74,26];

for(let i = 0; i < numeros.length ; i++)
{
    const numero = numeros[i];

    if(numero % 2 == 0){

        console.log("Esse número: " + numero + " é par !");
    }else
    {
        console.log("Esse número: " + numero + " é impar !");
    }
   

}