const nome = prompt("Qual o seu nome?")
const corFavorita = prompt("Qual a sua cor favorita?")

const fraseConcatenada = "A cor favorita de " + nome + " é " + corFavorita
const fraseTemplate = `A cor favorita de ${nome} é ${corFavorita}`

console.log(fraseConcatenada)
console.log(fraseTemplate)