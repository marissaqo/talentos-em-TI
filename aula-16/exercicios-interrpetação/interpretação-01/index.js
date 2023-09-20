
// Leia o c�digo

const respostaDoUsuario = prompt("Digite o n�mero que voc� quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
	console.log("Passou no teste.")
}
else {
	console.log("N�o passou no teste.")
}

// a) Explique o que o c�digo faz. Qual o teste que ele realiza?
// verifica se é par ou impar

// b) Para que tipos de n�meros ele imprime no console "Passou no teste"?
// par

// c) Para que tipos de n�meros a mensagem � "N�o passou no teste"?
//impar