const fs = require('fs');

// let arqscsv = fs.promises.readFile('teste.csv');

// arqscsv.then((arq)=>{
//     console.log(arq.toString('utf-8').replace(';','/'))

// })


// async e wait

async function Lerarquivo()
{
    const arquivo = await  fs.promises.readFile('teste.csv');
    const texto = arquivo.toString('utf-8')
    const transformado = texto.split('---')
    console.log(transformado)

}

Lerarquivo()