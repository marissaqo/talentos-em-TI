//somar 3 com 4
console.log(3+4)

//multiplicar 3 com 5 e dividir o resultado por 2
console.log((3*5)/2)

//subtrair 5 de 4 e multiplicar o resultado por -1
console.log((4-5)*-1);

//determinar o resto da divisao de 234 por 5
console.log(234%5);

// Antes de começar, crie 3 variáveis: a, b e c. Atribua os
// valores true, false e true, respectivamente
// a = true b = false c = true

let a = true; //a
let b = false; //b
let c = false; //c

// realize a operacao a && b
console.log(a && b);

// realize a operacao b && c
console.log(b && c);

// realize a operacao a && c
console.log(a && c);

// realize a operacao a && b && c
console.log(a && b && c);

// Antes de começar, crie 3 variáveis: a, b e c. Atribua os
// valores true, false e true, respectivamente
// a= true b = false c = true

// 1. Realize a operação: a || b
console.log(a || b);

// 2. Realize a operação: b || c
console.log(b || c);

// 3. Realize a operação: a || c
console.log(a || c);

// 4. Realize a operação: a || b || c
console.log(a || b || c);

// Faça um programa que receba o
// nome, ano de nascimento de uma
// pessoa e o ano atual e mostre:

let nome = prompt('Qual seu nome?')
let anoNascimento = Number(prompt('Qual ano voce nasceu?'))
let anoAtual =2023

// ● O nome da pessoa
alert(`Seu nome é ${nome}`)

// ● A idade dessa pessoa
alert(`A sua idade é ${anoAtual - anoNascimento}`)

// ● Um true ou false que diz se ela é
// maior de idade

//versao-1
let éMaiorDeIdade = anoAtual - anoNascimento >= 18? alert(`${nome} é maior de idade`) : alert(`${nome} não é maior de idade`)

//versao-2
éMaiorDeIdade = anoAtual - anoNascimento >= 18? console.log(true) : console.log(false)

// ● Quantos anos ela terá em 2050
let idadeEm2050 = Number(2050 - anoNascimento)

alert(`Em 2050 ${nome} terá ${idadeEm2050} anos`)

/**
Anotações da aula

Não usar muitas funções na mesma linha
Manter código legivel
Evitar repetições de código

*/
