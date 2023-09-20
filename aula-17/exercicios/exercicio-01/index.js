
let continuar = true

let numero
let numeros = []

let soma = 0


while (continuar) {
    numero = Number(prompt("Digite um número para somar ou 0 para sair"))
    numeros.push(numero)

    soma = soma + numero

    if (numero === 0) {
        numeros.pop()

        console.log(numeros)
        console.log(soma)

        continuar = false
    }
}
