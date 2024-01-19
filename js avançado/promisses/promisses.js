// Promisses com Assincronismo


const numeroRandom = new Promise((resolve,reject)=>{
    setTimeout(() =>{

        const numero = parseInt(Math.random() * 100)
        resolve(numero) // retorna quando estiver ok
    },1000)
    reject() // retorna quando estiver errado
   
})

console.log('Carregando.....');

numeroRandom
    .then((valor) =>{ // pega o valor retornado
        console.log("Valor aletatorio: " + valor)
        return valor + 25
    })
    .then((valor) => // pgar o retorno do primeiro com o acrescimento do segundo return
    {
        console.log("Valor aleatorio somando com 25: " + valor)
    })
    .catch((error)=>console.log(error))
    .finally(() => {

        setTimeout(() =>{

            console.log("Finalizado.")
        },1000)
      
    })
