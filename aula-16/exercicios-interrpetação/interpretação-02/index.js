
// Leia o c�digo abaixo, que foi feito por uma pessoa desenvolvedora,
// contratada para automatizar algumas tarefas de um supermercado


let fruta = prompt("Escolha uma fruta")
let preco

switch (fruta) {
	case "Laranja":
		preco = 3.5
		break;
	case "Maçã":
		preco = 2.25
		break;
	case "Uva":
		preco = 0.30
		break;
	case "Pera":
		preco = 5.5
		break; // BREAK PARA O ITEM D
	default:
		preco = 5
		break;
}

console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


// a) Para que serve o codigo acima?
// após o usuario escolher uma fruta um valor é atribuido e imprimido no console

// b) Qual sera a mensagem impressa no console, se o valor de fruta for "Maçã"?
//"O preço da fruta ", Maçã, " é ", "R$ ", 2.25

// c) Considere que um usuario queira comprar uma "Pera",
// qual seria a mensagem impressa no console se retirassemos o "break"
// que est� logo acima do "default" (o "break" indicado pelo coment�rio
// "BREAK PARA O ITEM D")?
// imprimiria a mensagem com o preco default
