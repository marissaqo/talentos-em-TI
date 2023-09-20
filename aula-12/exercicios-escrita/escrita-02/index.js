/**
 *
 * Escreva as fun��es explicadas abaixo:
 *
 * a) Escreva uma fun��o que receba 2 n�meros como par�metros,
 *  e, dentro da fun��o, fa�a a soma das duas entradas e retorne
 * o resultado. Invoque a fun��o e imprima no console o resultado.
 **/

const soma = (n1, n2) => n1 + n2;

console.log("Resultado = ", soma(2, 3));

/**
 * b) Fa�a uma fun��o que recebe 2 n�meros e retorne um booleano
 * que informa se o primeiro n�mero � maior ou igual ao segundo.
 **/

const verificaMaiorOuIgual = (n1, n2) => n1 >= n2;

console.log("É maior? ", verificaMaiorOuIgual(2, 4));

/**
 * c) Escreva uma fun��o que receba um n�mero e devolva um booleano
 *  indicando se ele � par ou n�o.
 **/

const verificaPar = (num) => num % 2 === 0;

console.log("É par? ", verificaPar(3));

/**
 * d) Fa�a uma fun��o que recebe uma mensagem (string)
 *  como par�metro e imprima o tamanho dessa mensagem, juntamente
 * com uma vers�o dela em letras mai�sculas.
 *
 **/

const mensagem = (mensagem) => {
  let tamanhoMensagem = mensagem.length;
  let mensagemMaiuscula = mensagem.toUpperCase();

  return `A ${mensagem} tem ${tamanhoMensagem} caracteres e maiuscula ficaria ${mensagemMaiuscula}`;
};

console.log(mensagem("Olá Mundo"));
