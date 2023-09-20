/**
 *
 * Crie uma função
 *
 * Crie uma função que receba dois objetos que representam filmes.
 * Eles devem ter as propriedades ano de lançamento e nome.
 * A função deve retornar uma mensagem no seguinte modelo:
 *
 * O primeiro filme foi lançado antes do segundo? false
 * O primeiro filme foi lançado no mesmo ano do segundo? true
 *
 **/

let filme1 = {
  nome: "Interstelar",
  ano: 2014,
};

let filme2 = {
  nome: "Kill Bill - Volume 1",
  ano: 2003,
};

function verificaAnoLancamento(filme1, filme2) {
  let mensagem1 = `O primeiro filme foi lançado antes do segundo? ${
    filme1.ano < filme2.ano
  }`;

  let mensagem2 = `O primeiro filme foi lançado no mesmo ano do segundo? ${
    filme1.ano === filme2.ano
  }`;

  return [mensagem1, mensagem2];
}

let listaMensagens = verificaAnoLancamento(filme1, filme2);

console.log(listaMensagens[0]);
console.log(listaMensagens[1]);