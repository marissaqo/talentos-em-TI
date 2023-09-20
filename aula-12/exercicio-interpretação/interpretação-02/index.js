
// Leia o c�digo

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

/**
 * 
 * a) Explique o que essa fun��o faz e qual
 *  � sua utilidade.
 * essa funcao imprime uma mensagem em letras minusculas
 * e inclui cenoura
 * 
 * b) Determine qual ser� a sa�da no console
 *  para cada uma das 3 entradas do usu�rio:
 * - Eu gosto de cenoura.
 * - CENOURA � bom pra vista.
 * - Cenouras crescem na terra.
 * 
**/


// A saída é "false" porque o código está verificando se
// o texto inserido pelo usuário contém a palavra
// "cenoura" (em minúsculas), usando o método includes()
// após converter todo o texto para minúsculas com
// toLowerCase(). No entanto, o código não transforma a
// palavra "cenoura" para minúsculas antes de fazer a 
// comparação.

// Portanto, se o usuário inserir exatamente a palavra 
// "cenoura", com todas as letras em minúsculas, a
// comparação será verdadeira e a saída será "true". 
// No entanto, se o usuário inserir "Cenoura" com a primeira 
// letra maiúscula, a comparação será falsa, porque a função 
// toLowerCase() no início do código transforma o texto do 
// usuário em minúsculas, enquanto a palavra "Cenoura" não 
// será transformada.





