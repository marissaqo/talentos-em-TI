/**
 *
 * Função extra
 * Crie uma função a mais para o exercício 3 de escrita de código.
 * Essa função vai auxiliar o controle de estoque do sacolão:
 * ela deve receber por parâmetro uma das frutas e retornar
 * esse mesmo objeto com a propriedade disponibilidade com o valor invertido.
 *
 **/

let estoqueSacolao = [
  { nome: "Maçã", disponibilidade: true },
  { nome: "Manga", disponibilidade: false },
  { nome: "Banana", disponibilidade: true },
  { nome: "Mamão", disponibilidade: false },
];

console.log(inverteDisponibilidade(estoqueSacolao));

function inverteDisponibilidade(fruta) {

  return `A fruta ${fruta[0].nome} esta ${!fruta[0].disponibilidade}`;
}
