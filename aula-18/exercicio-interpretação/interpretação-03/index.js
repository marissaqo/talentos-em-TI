
// Qual seria o resultado impresso no console, se o usu�rio digitasse o n�mero "4"?

let quantidadeAtual = 0
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas"))
             //0               //4
while (quantidadeAtual < quantidadeTotal) {
	let linha = ""

	for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
		linha += "*"
	}

	console.log(linha)

	quantidadeAtual++
}

// vai pecorre o laço for e adicionar um * a let linha

// *
// **
// ***
// ****