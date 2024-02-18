
// ex 1

// class Carro{

//     marca;
//     cor;
//     gastoporkm;
    
 
//     constructor(marca,cor,gastoporkm){
//         this.marca = marca;
//         this.cor = cor;
//         this.gastoporkm = gastoporkm;

//     }

//     GastoPorLitro(km,preco_gasolina) 
//     {
    

//         return km * this.gastoporkm * preco_gasolina;

//     }

// }


// car = new Carro('Fiat','Azul',1/12);
// console.log(car);

// console.log(car.GastoPorLitro(70,3.29));


//  ex 2

class Pessoa{

    nome;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){

        return this.peso / (this.altura * 2);

    }

    classificar(){

        const imc = this.calcularImc();

        if(imc < 18 ){
            return ("Abaixo do peso");
        }else if(imc > 18 && imc <= 25){
            return ("Peso normal");

        }else if(imc <= 30){
            return ("acima do peso");

        }else{
            return ("obeso");
        }

      
    }
    
}

const breno = new Pessoa('Breno',109,1.79);
const jose = new Pessoa('Jose',80,1.99);
const pedro = new Pessoa('pedro',55,1.19);

console.log(breno.classificar());

console.log(jose.classificar());

console.log(pedro.classificar());

