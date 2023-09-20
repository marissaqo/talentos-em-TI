// let cachorroPequeno = {
//   raca: "vira-lata",
//   porte: "pequeno",
// };

// let novoCachorro = {
//   ...cachorroPequeno,
//   nome: "Pretinha",
//   idade: 6,
// };

// console.log(novoCachorro);

// listaNomes = ['maria', 'rita', 'bruna', 'janaina', 'ana'];

// listaCopiaNomes = [...listaNomes];

// console.log(listaCopiaNomes);

function recebeObjetoPessoa(obj1, obj2) {
  let pessoa = {
    ...obj1,
    nome: "Maria",
    idade: 21,
    generoMusicalFavorito: "pop",
  };

  pessoa.melhorAmigo = obj2;

  return `O nome da pessoa é ${pessoa.nome} e suas comidas favoritas são ${pessoa.comida1}, ${pessoa.comida2} e ${pessoa.comida3}. Seu melhor amigo se chama ${pessoa.melhorAmigo.nome} e tem  ${pessoa.melhorAmigo.idade} anos.`;
}

let comidasFavoritas = {
  comida1: "lasanha",
  comida2: "pizza",
  comida3: "xis salada",
};

let melhorAmigo = {
  nome: "Jonas",
  idade: 27,
  generoMusicalFavorito: ["rock", "rap"],
};

console.log(recebeObjetoPessoa(comidasFavoritas, melhorAmigo));
