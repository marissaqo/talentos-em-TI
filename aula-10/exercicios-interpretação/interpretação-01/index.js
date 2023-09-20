
// Indique todas as mensagens impressas no console, 
// sem executar o programa

let array
console.log('a. ', array)
// a. undefined


array = null
console.log('b. ', array)
// b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
// c. 11

let i = 0
console.log('d. ', array[i])
// d. 3

array[i+1] = 19
// 19 foi adicionado ao array na posicao 1 substituindo o 4
console.log('e. ', array)
// e. Array(11)

const valor = array[i+6]
console.log('f. ', valor)
// f. 9