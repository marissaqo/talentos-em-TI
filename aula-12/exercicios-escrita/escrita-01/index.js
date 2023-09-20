/**
 *
 * Escreva as fun��es explicadas abaixo:
 *
 * a) A fun��o n�o deve receber nenhum par�metro e deve imprimir uma mensagem falando algumas informa��es sobre voc�, como:
 *
 * `Eu sou Caio, tenho 23 anos, moro em S�o Paulo e sou estudante.`
 *
 * Troque o nome, idade, cidade e se � estudante ou n�o por informa��es sobre voc�. Lembrando que a fun��o n�o possui entradas, apenas imprime essa mensagem.
 * **/

function imprimeMensagem() {
  return `Eu sou Jonas, tenho 27 anos, moro em São Leopoldo e sou estudante de Sistemas para Internet.`;
}

console.log(imprimeMensagem());

/**
 * b) Agora escreva uma fun��o que receba 4 par�metros que correspondem �s informa��es de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profiss�o (string). Ela deve retornar uma string que unifique todas as informa��es da pessoa em uma s� mensagem com o template:
 *
 * `Eu sou [NOME], tenho [IDADE] anos, moro em [ENDERE�O] e sou [PROFISS�O].`
 *
 * Dica: na hora de criar a frase, voc� pode utilizar as template strings que vimos na aula anterior! As vari�veis da frase, nesse caso, ser�o os pr�prios par�metros recebidos na fun��o.
 *
 **/

function imprimeDados(nome, idade, cidade, profissao) {
  return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`;
}
console.log(imprimeDados("Maria", 21, "São Leopoldo", "Vendedora"));
