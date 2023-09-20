// 4. Faça um programa que pergunte ao usuário dois números.
// Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas por true/false:

let n1 = Number(prompt('Digite o primeiro numero'));
let n2 = Number(prompt('Digite o segundo numero'));

// a) O primeiro numero é maior que segundo? true/false
console.log('O primeiro numero é maior que segundo? ', n1 > n2);

// b) O primeiro numero é igual ao segundo? true/false
console.log('O primeiro numero é igual ao segundo?', n1 == n2);

// c) O primeiro numero é divisível pelo segundo? true/false
console.log('O primeiro numero é divisível pelo segundo?', n1 % n2 == 0 );

// d) O segundo numero é divisível pelo primeiro? true/false
console.log('O segundo numero é divisível pelo primeiro?', n2 % n1 == 0 );


// Dica: O true/false vai depender dos números inseridos e do resultado das operações.