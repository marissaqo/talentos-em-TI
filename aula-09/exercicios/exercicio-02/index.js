const frase = prompt('digite uma frase para converter para maiuscula');

let fraseAlterada = frase.replace('o', 'i')
let tamanhoFrase = frase.length;
let fraseMaiuscula = frase.toUpperCase()
let fraseSemEspaco = frase.trim();

console.log(fraseAlterada);
console.log(tamanhoFrase);
console.log(fraseMaiuscula);
console.log(fraseSemEspaco);