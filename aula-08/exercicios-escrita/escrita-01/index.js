// 1. Faça um programa que:
// a) Pergunte a idade do usuário.
let idade = Number(prompt("Qual sua idade?"));

// b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga.
let idadeAmigo = Number(prompt("Qual a idade do(a) seu(sua) melhor amigo(a)"));

// c) Imprima no console a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (true/false).

comparaIdade(idade, idadeAmigo);
// d) Imprima no console a diferença de idade (não tem problema se sair um número negativo).

function comparaIdade(paramsIdade, paramsIdadeAmigo) {
  console.log(
    "Sua idade é maior do que a do seu melhor amigo?",
    paramsIdade > paramsIdadeAmigo
  );
}


// Dica: não se esqueça de converter as respostas para o tipo número.
