
const numeros = [ -11, -15, -18, -14, -12, -13 ]

function retornarMaior (numeros) {
    let numeroMaior = numeros[0]

    for (let numero of numeros) {
        if (numero > numeroMaior) {
            numeroMaior = numero
        }
    }

    return numeroMaior
}

console.log(`O maior número é ${retornarMaior(numeros)}`)
