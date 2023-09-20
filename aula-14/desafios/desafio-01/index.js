/**
 *
 * Crie um função
 *
 * Crie uma função que pergunte ao usuário seu nome, sua idade e sua profissão e imprima no console um objeto com essas propriedades. Imprima também o tipo para garantir que é um objeto.
 *
 * Exemplo de entrada (input):
 * "Lais", "26", "Programadora"
 * Exemplo de saída (output):
 * { nome:"Lais", profissao:"Programadora", idade:"26" },
 * "Object"
 *
 **/

let nome = prompt("Qual seu nome?");
let idade = Number(prompt("Qual sua idade?"));
let profissao = prompt("Qual sua profissão");

console.log(perguntaUsuario(nome, idade, profissao));

function perguntaUsuario(nome, idade, profissao) {
  let dados = {
    nome: nome,
    idade: idade,
    profissao: profissao,
  };

  console.log(dados)

  return typeof dados;
}
