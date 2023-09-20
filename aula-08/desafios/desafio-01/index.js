// 1. Unidades de temperatura
let temperaturaAtualKelvin;
let temperaturaAtualFahreinheit;
let temperaturaAtualCelsius;

// a) Calcule e mostre o valor de 77°F em K, 
// mostrando a unidade no console também.
temperaturaAtualFahreinheit = 77;

let valorDeFahreinheitEmKelvin = (temperaturaAtualFahreinheit - 32) * (5/9) + 273.15;
console.log(valorDeFahreinheitEmKelvin);


// b) Calcule e mostre o valor de 80°C em °F, 
// mostrando a unidade no console também.
temperaturaAtualCelsius = 80;
let valorCelsiusEmFarenheit = (temperaturaAtualCelsius) * (9/5) + 32;
console.log(valorCelsiusEmFarenheit);

// c) Calcule e mostre o valor de 30°C em °F e K, 
// mostrando as unidades no console também.
temperaturaAtualCelsius = 30;
valorCelsiusEmFarenheit = (temperaturaAtualCelsius) * (9/5) + 32;
valorDeFahreinheitEmKelvin = (valorCelsiusEmFarenheit - 32) * (5/9) + 273.15;
console.log(valorCelsiusEmFarenheit);
console.log(valorDeFahreinheitEmKelvin);

// d) Altere o último item para que o usuário 
// insira o valor em graus Celsius que ele deseja converter.

temperaturaAtualCelsius = Number(prompt('Digite um valor em graus Celsius'));

valorCelsiusEmFarenheit = (temperaturaAtualCelsius) * (9/5) + 32;
valorDeFahreinheitEmKelvin = (valorCelsiusEmFarenheit - 32) * (5/9) + 273.15;
console.log(valorCelsiusEmFarenheit);
console.log(valorDeFahreinheitEmKelvin);