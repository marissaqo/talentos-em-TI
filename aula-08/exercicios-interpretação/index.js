//Exercícios de interpretação de código
//Tente responder aos exercícios dessa seção sem executar o código. Se ficar muito difícil, você pode rodar no seu computador para analisar e pensar sobre o resultado.

//1. Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR ou programa.

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)

// a. false

// b. false

// c. true

// d. boolean


//2. Seus colegas se aproximam de você falando que o código dele não funciona como devia.
//Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?

let primeiroNumero = prompt("Digite um número!")
let segundoNumero = prompt("Digite outro número!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

// O problema é que será impresso NaN (Not a Number).


//3. Ainda sobre o exercício anterior.
//Sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números./* 

// Faltou tipar com number()