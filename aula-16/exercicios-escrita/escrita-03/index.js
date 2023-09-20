/**
 *
 * Repita o exerc�cio anterior, mas utilizando a estrutura de "switch/case".
 *
 * Dica: Lembre-se que "switch/case" � como se fosse um "if",
 * mas verifica somente igualdades estritas (===).
 *
 **/
let turno = prompt(
  'Digite um turno \n "M" (matutino) \n "V" (Vespertino) \n "N" (Noturno)'
).toLocaleUpperCase();

switch (turno) {
  case "M":
    alert("Bom Dia!");
    break;

  case "V":
    alert("Boa Tarde!");
    break;

  case "N":
    alert("Boa Noite!");
    break;

  default:
    alert("Turno Invalido!");
    break;
}
