/**
 *
 * Considere a situa��o
 *
 * Voc� vai ao cinema com um amigo ou amiga, por�m ele/ela s� assistir�
 * a um filme com voc� se ele for do g�nero fantasia e se o ingresso
 * custar menos de 15 reais.
 *
 * Fa�a um c�digo que pergunta ao usu�rio qual o g�nero de
 *  filme que v�o assistir e outra pergunta sobre o pre�o do ingresso,
 *  ent�o verifique se seu amigo ou amiga vai topar assistir o filme.
 *
 * Caso positivo, imprima no console a mensagem: "Bom filme!",
 * caso contr�rio, imprima "Escolha outro filme :(".
 *
 **/

let genero = prompt(
  "Digite o genero do filme \n fantasia \n terror \n ação"
).toLocaleLowerCase();

let precoIngresso = Number(prompt("Digite o valor do ingresso"));

if (genero === "fantasia" && precoIngresso < 15) {
  alert("Bom filme");
} else if (precoIngresso >= 15) {
  alert("Ingresso esta caro, escolha outro filme");
} else {
  alert("Genero não é fantasia, escolha outro filme");
}
