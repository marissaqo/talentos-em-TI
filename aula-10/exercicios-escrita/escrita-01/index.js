
/**
 * 
 * Fa�a um programa que pergunte ao usu�rio 
 * seu nome e seu e-mail.
 * Em seguida, imprima no console a seguinte mensagem:
 * 
 * O e-mail "emailDoUsuario" foi cadastrado com sucesso. 
 * Seja bem-vinda(o), "nomeDoUsuario"!
 * 
 * Dica: Voc� pode fazer isso de duas formas: 1) 
 * concatenando as strings (com o sinal de +); ou 2) 
 * utilizando template strings (e envelopando a sua string 
 * com o sinal de crase `` ao inv�s de aspas).
 * 
**/
let nome = prompt('digite seu nome');
let email = prompt('digite seu email');

console.log(`O ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}`);