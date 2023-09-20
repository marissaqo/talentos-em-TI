// 2. Cálculo de energia

// Sabe-se que o quilowatt-hora de energia custa R$0.05.
// Faça um programa que receba a quantidade de quilowatts
// consumida por uma residência.

let custoQuilowattHora = 0.05;

// a) Calcule e mostre o valor a ser pago por uma residência
// que consuma 280 quilowatt-hora.
let consumoResidencia = 280;
let valorContaDeLuz = custoQuilowattHora * consumoResidencia;

console.log(valorContaDeLuz);


// b) Altere o programa para receber mais um valor:
// a porcentagem de desconto. Calcule e mostre o valor
// a ser pago pela mesma residência acima considerando
// 15% de desconto.

let contaDeLuzComDesconto = valorContaDeLuz - (valorContaDeLuz * 0.15);

console.log(contaDeLuzComDesconto);