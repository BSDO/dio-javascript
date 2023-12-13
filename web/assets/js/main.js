
const h1 = document.getElementById('btn');

// // <!-- addEventListener funcao pra diverso opces -->
// h1.addEventListener("click",function(){
//    alert("Ola");
// })


// fetch api pra consultar api

const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`


// Prommise => promessa de um resultado 
fetch(url)
   .then((response) => {return response.json()}) // transforma o retorno em json
   .then((jsonBody) =>{console.log(jsonBody)}) // imprime o retorno de json
   .catch(function (error){console.log(error) })
   .finally(function (){console.log('Requisação concluida!')})