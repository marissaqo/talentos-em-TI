/**
 *
 * Fa�a um programa que verifica que turno do dia um aluno estuda.
 *
 * Pe�a para digitar "M" (matutino), "V" (Vespertino) ou "N" (Noturno).
 * Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!".
 * Utilize os blocos "if/else if/else".
 *
 **/

let turno = prompt(
  'Digite um turno \n "M" (matutino) \n "V" (Vespertino) \n "N" (Noturno)'
).toLocaleUpperCase();

if (turno === "M") {
  alert("Bom Dia!");
} else if (turno === "V") {
  alert("Boa Tarde!");
} else if (turno === "N") {
  alert("Boa Noite!");
} else {
  alert("Turno Invalido!");
}
