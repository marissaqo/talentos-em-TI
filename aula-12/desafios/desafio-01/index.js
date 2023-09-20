/**
 *
 * Funções e mais funções
 *
 * Funções são trechos de códigos como quaisquer outros, mas que podemos acessá-los
 * mais de uma vez ao longo do código através de invocações/chamadas.
 * Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções:
 *
 * a) Escreva uma "arrow function" que recebe um parâmetro e imprime no console esse parâmetro.
 **/

const imprimeMensagem = (parametro) => {
  console.log(parametro);
};

/**
 * b) Escreva outra "arrow function" que recebe dois valores como parâmetros mas não gera
 * "nenhum retorno". Faça a soma entre esses valores e chame a sua primeira função mandando
 * este resultado da soma como entrada para imprimi-lo.
 *
 **/

const somar = (n1, n2) => {
  let resultado = n1 + n2;
  imprimeMensagem(resultado);
};

somar(5, 7);
