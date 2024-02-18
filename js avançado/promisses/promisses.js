// Promisses com Assincronismo


// const numeroRandom = new Promise((resolve,reject)=>{
//     // setTimeout(() =>{
//         const numero = parseInt(Math.random() * 50)

//         resolve(numero) // retorna quando estiver ok
//     // },1000)
//     erro = "Nao ntrei aquo"
//     reject(erro); // retorna quando estiver errado
   
// })

// console.log('Carregando.....');

// setTimeout(() =>{
//     console.log('..........')
//  },1000)

// numeroRandom
//      // pega o valor retornado
//     .then((valor) =>{
//         console.log("Valor aletatorio: " + valor)
//         return valor + parseInt(Math.random() * 50)
//     })
//      // pgar o retorno do primeiro com o acrescimento do segundo return
//     .then((valor) =>
//     {
//         console.log("Valor aleatorio somando com 25: " + valor)
//     })
//     .catch((error)=>console.log(error))
//     .finally(() => {

//         setTimeout(() =>{

//             console.log("Finalizado.")
//         },1000)
      
//     })


const url = 'https://economia.awesomeapi.com.br/json/last/USD-BRL'

const dolar = {}

dolar
    fetch(url)
    .then((retorno) => retorno.json())
    .then((texto) => texto.USDBRL)
    .then((retorno) => {
        console.log(retorno.low)
    })

 
