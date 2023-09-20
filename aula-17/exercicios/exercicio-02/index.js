
const numeros = [ 11, 15, 18, 14, 12, 13 ]

function retornarMaior (numeros) {
    let numeroMaior = numeros[0]

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > numeroMaior) {
            numeroMaior = numeros[i]
        }
    }

    return numeroMaior
}

console.log(`O maior número é ${retornarMaior(numeros)}`)
