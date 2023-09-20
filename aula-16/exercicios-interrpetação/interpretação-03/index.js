
// Leia o c�digo

const numero = Number(prompt("Digite o primeiro n�mero."))

if (numero > 0) {
	console.log("Esse n�mero passou no teste")
	let mensagem = "Essa mensagem � secreta!"
}

console.log(mensagem)

// a) O que a primeira linha est� fazendo?
// recebendo um numero via prompt

// b) Considere um usu�rio digitou o n�mero 10.
// Qual ser� a mensagem do terminal? E se fosse o n�mero -10?
// imprimiria "Esse n�mero passou no teste" e
// mensagem is not defined independente do numero que fosse recebido do prompt
// -10 nao imprime nada

// c) Haver� algum erro no console? Justifique usando 
// os conceitos de bloco ou escopo.
// let mensagem nao pode ser acessada fora do escopo do laço if