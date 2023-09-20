/**
 *
 * Considere que voc� tenha acesso a um "array" que �
 * composto somente de n�meros. Crie uma fun��o para
 * cada um dos itens abaixo, realizando as opera��es pedidas:
 *
 * 1) Escreva uma fun��o que imprime cada
 *    valor do "array" em uma linha.
 *
 * 2) Escreva uma fun��o que imprime cada um dos
 *    valores do "array" divididos por 10.
 *
 * 3) Escreva uma fun��o que cria um novo array
 *    contendo somente os n�meros pares do "array original"
 *    e, depois, imprima esse novo array.
 *
 * 4) Escreva uma fun��o que cria um novo array contendo
 *    strings no seguinte formato:
 *    "O elemento do �ndice 'i' �: 'numero'".
 *    Depois, imprima esse novo array.
 *
 * 5) Escreva uma fun��o que imprime no console o maior
 *    e o menor n�meros contidos no "array original".
 *
 **/

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
let novoArray = [];

imprimirLista(arrayOriginal);

function imprimirLista(itens) {
  itens.forEach((item) => console.log(item));
}

imprimirValoresDivididos(arrayOriginal);

function imprimirValoresDivididos(itens) {
  itens.forEach((item) => console.log(item / 10));
}

filtrarNumerosPares(arrayOriginal);

function filtrarNumerosPares(numeros) {
  for (let i = 0; i < arrayOriginal.length; i++) {
    if (numeros[i] % 2 === 0) {
      novoArray.push(numeros[i]);
    }
  }
  console.log(novoArray);
}

identificarElementos(arrayOriginal);

function identificarElementos(itens) {
  for (let i = 0; i < arrayOriginal.length; i++) {
  
      console.log(`O elemento do indice ${i} é ${itens[i]} da lista de itens: ${itens}`)
 
  }
}

imprimirMaiorMenor(arrayOriginal);

function imprimirMaiorMenor(itens) {
  console.log(`O menor numero do array é ${Math.min(...itens)} e o maior numero do array é ${Math.max(...itens)}`);
}
