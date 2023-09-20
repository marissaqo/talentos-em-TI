
let listaDePalavras = [ "Oi", "sumido,", "tudo", "bem?", "Saudades!" ]

function imprimirFrase (palavras) {
    let frase = ""

    for (let palavra of palavras) {
        frase = frase + palavra + " "
    }

    console.log(frase)
}

imprimirFrase(listaDePalavras)
