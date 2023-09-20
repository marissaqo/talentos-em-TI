/**
 *
 * Pergunte ao usu�rio quantos bichos de estima��o ele
 * tem e guarde esse dado em uma vari�vel.
 *
 * Se a quantidade for 0, imprima no console
 * "Que pena! Voc� pode adotar um pet!".
 *
 * Se a quantidade for maior que 0, solicite que
 * o usu�rio digite os nomes deles, um por um,
 * e guarde esses nomes em um array.
 * Dica: coloque um "prompt" dentro de um loop.
 * Esse loop deve ser executado a mesma quantidade
 * de vezes que o usu�rio inseriu. Por exemplo:
 * se o usu�rio tem 4 pets, ele deve conseguir inserir 4 nomes.
 * Por fim, imprima no console o "array" completo,
 * com os nomes dos bichos.
 *
 **/
let quantidadeAnimaisDeEstimacao = Number(
  prompt("Quantos animais de estimação você tem?")
);

let listAnimaisDeEstimacao = [];

if (quantidadeAnimaisDeEstimacao === 0) {
  alert("Que pena! Você pode adotar um pet!");
} else {
  while (listAnimaisDeEstimacao.length != quantidadeAnimaisDeEstimacao) {
    listAnimaisDeEstimacao.push(prompt("Digite o nome do animal"));
  }
}

console.log(listAnimaisDeEstimacao);
