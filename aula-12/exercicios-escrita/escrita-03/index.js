/**
 *
 * Crie uma fun��o para cada uma das opera��es b�sicas
 *  (soma, subtra��o, multiplica��o e divis�o).
 *
 * Pe�a para o usu�rio inserir dois n�meros e
 * chame essas 4 fun��es com esses valores inseridos
 * pelo usu�rio sendo o argumento. Por fim,
 * mostre no console o resultado das opera��es:
 *
 * Exemplo:
 *
 * N�meros inseridos: 30 e 3
 * Soma: 33
 * Diferen�a: 27
 * Multiplica��o: 90
 * Divis�o: 10
 *
 * Dica: lembre-se de converter a entrada do usu�rio
 *  para n�mero antes de fazer os c�lculos.
 *
 **/

const calculadora = (operacao, n1, n2) => {
  if (operacao.toLowerCase() === "soma") {
    let soma = Number(n1) + Number(n2);

    return soma;
  } else if (operacao.toLowerCase() === "subtração") {
    let subtracao = Number(n1) - Number(n2);

    return subtracao;
  } else if (operacao.toLowerCase() === "multiplicação") {
    let multiplicacao = Number(n1) * Number(n2);

    return multiplicacao;
  } else if (operacao.toLowerCase() === "divisão") {
    let divisao = Number(n1) / Number(n2);

    return divisao;
  } else {
    return `Operador invalido`;
  }
};

console.log("soma = ", calculadora("soma", 2, 4));
console.log("subtração = ", calculadora("subtração", 2, 4));
console.log("multiplicação = ", calculadora("multiplicação", 2, 4));
console.log("divisão = ", calculadora("divisão", 2, 4));
