/**
 *
 * Fa�a um programa que contenha um array com 5 das suas
 *  comidas preferidas, armazenado em uma vari�vel.
 * Em seguida, siga os passos:
 *
 * 1. Imprima no console o array completo.
 *
 * 2. Imprima no console a mensagem "Essas s�o as minhas
 *  comidas preferidas" seguida por cada uma das comidas,
 *  uma embaixo da outra.
 *
 * 3. Desafio: pergunte ao usu�rio uma comida preferida.
 * Troque a segunda comida da sua lista pela resposta do
 * usu�rio e imprima no console a nova lista.
 *
 **/
let listaComidasFavoritas = ["xis", "pizza", "lasanha", "churrasco", "massa"];

console.log(listaComidasFavoritas);

console.log(`Essas são as minhas comidas preferidas: ${listaComidasFavoritas[0]}, ${listaComidasFavoritas[1]}, ${listaComidasFavoritas[2]}, ${listaComidasFavoritas[3]}, ${listaComidasFavoritas[4]}`);

let comidaFavoritaUsuario = prompt('Qual sua comida favorita?');

listaComidasFavoritas[1] = comidaFavoritaUsuario;

console.log(listaComidasFavoritas);