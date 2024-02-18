// function teste(nome)
// {
//     console.log("olá mundo" + nome);   
// }

// teste("Breno Silva");


// // Funcao serve pra nao repetir tanto codigo, e pode reutilizar 


// (function(){  // funcao que é criada e ja executada
//     console.log("oodckod");
// }())

function meuNome(nome){
    return "Olá, " + nome + " você é ";
}

function VerificaIdentidade(idade,nome)
{
    
    if(idade < 18)
    {
       texto = meuNome(nome) + " Menor de idade";
    }
    else {

        texto = meuNome(nome) + " Maior de idade";
    }
    
    return texto 
}



console.log(VerificaIdentidade(29,"Breno"));
console.log(VerificaIdentidade(18,"Bruna"));
console.log(VerificaIdentidade(12,"Jose"));
console.log(VerificaIdentidade(17,"Vara"));
console.log(VerificaIdentidade(30,"Br"));




