// Programa pra calcular o valor da viagem

/*
    1- preco do combustivel
    2 -gasto medio de combustivel por km 
    3 - distancia em km da viagem

 */

const preco_combustivel = 5.20;
let distancia_km = 279;
const gastomedioporkm = 12;
//const reembolsa = 2.50;



const litrosConsumidos = distancia_km / gastomedioporkm;
console.log("Litros gastos  " + litrosConsumidos.toFixed(1) + "  em : " + distancia_km + " km");
const gastos_totais = litrosConsumidos * preco_combustivel;
// valores decima depois do . 2 casa e transforma o . em ,
console.log("Valor Gasto Com Combustivel: R$ " + (gastos_totais.toFixed(2).replace('.', ',')));


// const etanol = 6.66;
// const gasolina = 5.79;
// let meu_carro =  "Etanol";
// let gastoporkm = 12;
// let distanciakm = 100;

// if(meu_carro == "Gasolina"){
//     const litrosConsumidos = distanciakm / gastoporkm;
//     const gastos_totais = litrosConsumidos * gasolina;
//     console.log("Gasto em gasolina na viagem:  R$ " + gastos_totais );
// }else{
//     const litrosConsumidos = distanciakm / gastoporkm;
//     const gastos_totais = litrosConsumidos * etanol;
//     console.log("Gasto em etanol na viagem:  R$ " + (gastos_totais.toFixed(2).replace('.', ',')));
// }


// let pagamento = "Credito";
// const valor_produto = 59.99;
// const desconto_debito = 0.1;
// const desconto_pix_ou_dinheiro = 0.15;
// let numero_parcelas = 2;



// if(pagamento == "Debito"){
//     total_desconto = valor_produto - (desconto_debito * valor_produto);
//     console.log("Pagando com cartão de debito voce tem um desconto de 10% ao que vale: R$ " + (total_desconto.toFixed(2).replace('.',',')));

// }
// else if(pagamento == "Dinheiro" || pagamento == "Pix"){
//     total_desconto = valor_produto - (desconto_pix_ou_dinheiro * valor_produto);
//     desconto = desconto_pix_ou_dinheiro * valor_produto;
//     console.log("Pagando com pix ou dinheiro voce tem um desconto de 15% ao que vale: R$ " + (desconto) + "sendo assim voce vai pagar o total de R$ " + (total_desconto.toFixed(2).replace('.',',')));

// }
// else if(pagamento == "Credito" && numero_parcelas == 2){
//     total_desconto = valor_produto / numero_parcelas;
//     console.log("Pagando com cartão de credito voce não tem um desconto e se parcela em duas vezes fica:  R$ " + (total_desconto.toFixed(2).replace('.',',')));

// }else{
//     total_desconto = valor_produto + (valor_produto * 0.10);
//     parcelas = total_desconto / numero_parcelas;

//     console.log("Pagando com cartão de credito voce não tem um desconto e se a parcela passa de 2 vezes\n  Total com juros de 10% R$ " + (total_desconto.toFixed(2).replace('.',',')) + " - Número de parcelas em " + (numero_parcelas) +  " de R$ " + (parcelas.toFixed(2).replace(',','.')));
// }