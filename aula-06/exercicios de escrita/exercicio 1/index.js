let nome;
let idade;

console.log(typeof nome);
console.log(typeof idade);
//undefined significa que há um valor vazio ou tipo indefinido na variavel

nome = prompt('Qual seu nome?');
idade = Number(prompt('Qual sua idade?'));

console.log(typeof nome);
// string

console.log(typeof idade);
// number

alert(`Olá ${nome}, você tem ${idade} anos.`)