// 3. Conversão de medidas


// a) Procure uma forma de converter libra (lb) para quilograma
// (kg) e escreva um programa que converta 20lb para kg. 
// Imprima a resposta no console da seguinte forma:
// 20lb equivalem a X kg.

let pesoEmLibras = 201;
let pesoKgEmLibras = 0.453592;
let pesoLibrasEmKg = pesoEmLibras * pesoKgEmLibras;

console.log(`20lb equivalem a ${pesoLibrasEmKg.toFixed(3)} kg`);

// b) Procure uma forma de converter onça (oz) para quilograma
// (kg) e escreva um programa que converta 10.5oz para kg. 
// Imprima a resposta no console da seguinte forma: 10.5oz 
// equivalem a X kg.

let pesoEmOnca = 10.5;
let pesoKgEmOnca = 0.0283495;
let pesoOncaEmKg = pesoEmOnca * pesoKgEmOnca;

console.log(`10.5oz equivalem a ${pesoOncaEmKg} kg`);

// c) Procure uma forma de converter milha (mi) para metro (m)
// e escreva um programa que converta 100mi para m. Imprima a 
// resposta no console da seguinte forma: 100mi equivalem a X m.
let UmaMilhaParaMetro = 1609.34;
let cemMilha = 100;

let cemMilhaParaMetro = cemMilha * UmaMilhaParaMetro;

console.log(`100mi equivalem a ${cemMilhaParaMetro} m`);


// d) Procure uma forma de converter pés (ft) para metro (m)
// e escreva um programa que converta 50ft para m. Imprima a
// resposta no console da seguinte forma: 50ft equivalem a X m.

let UmaPeParaMetro = 0.3048;
let cinquentaPe = 50;

let cinquentaPeParaMetro = cinquentaPe * UmaPeParaMetro;

console.log(`100mi equivalem a ${cinquentaPeParaMetro} m`);


// e) Procure uma forma de converter galão (gal) para litro (l)
// e escreva um programa que converta 103.56gal para litro. 
// Imprima a resposta no console da seguinte forma: 103.56gal 
// equivalem a X l.

let galaoAmericanoEmLitro = 3.78541;
let valorGalao = 103.56;

let valorGalaoEmLitro = galaoAmericanoEmLitro * valorGalao;

console.log(`103.56gal equivalem a ${valorGalaoEmLitro} l`);

// f) Procure uma forma de converter xícara (xic) para litro (l)
// e escreva um programa que converta 450xic para litro.
// Imprima a resposta no console da seguinte forma: 450 xic
// equivalem a X l.

let xicaraEmLitro = 0.284131;
let qtdXicara = 450;

let volumeDeXicaraEmLitro = xicaraEmLitro * qtdXicara;

console.log(`450 xic equivalem a ${volumeDeXicaraEmLitro} l`);

// g) Escolha ao menos um dos itens anteriores e modifique o
// programa para que ele peça ao usuário o valor da unidade
// original antes de converter

qtdXicara = Number(prompt('Digite uma quantidade de xicaras para convertermos para litros'));

volumeDeXicaraEmLitro = xicaraEmLitro * qtdXicara;

console.log(`450 xic equivalem a ${volumeDeXicaraEmLitro} l`);