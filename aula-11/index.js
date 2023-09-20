function calculaImc(peso, altura) {
  let imc = peso / (altura * altura);

  return imc.toFixed(2);
}

console.log(calculaImc(80, 1.75));

function calculaArea(largura, altura) {
  let area = largura * altura;

  return `${area} Metros quadrados`;
}

console.log(calculaArea(8, 6));

//exercicio 1
function imprimirOlaMundo() {
  console.log("ola mundo");
}

imprimirOlaMundo();

//exercicio 2
function imprimirNome(nome) {
  console.log(`Olá ${nome}`);
}

imprimirNome("Jonas");
imprimirNome("Maria");
imprimirNome("Rita");

//exercicio 3
const soma = (a, b) => a + b;

console.log(soma(3, 5));

//exercicio 4
function recebeArray(array) {
  let ultimoIndice = array.length - 1;

  let primeiroNumeroDividido = array[0] / 2;
  let ultimoNumeroDividido = array[ultimoIndice] / 2;

  let novoArray = [ultimoNumeroDividido, primeiroNumeroDividido];

  return novoArray;
}

console.log(recebeArray([1, 2, 3, 4, 5]));
