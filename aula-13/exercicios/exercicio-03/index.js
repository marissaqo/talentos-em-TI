let filme = {
  nome: "The Batman",
  ano: 2022,
  diretor: "Matt Reeves",
  listaElenco: [
    "Robert Pattinson",
    "Zoe Kravits",
    "Paul Dano",
    "Colin Farrel",
    "Jeffrey Wright",
    "Andy Serkis",
    "John Turturro",
  ],
  jaViu: true,
};

let listaPersonagens = [
  "Batman",
  "Mulher Gato",
  "Charada",
  "Pinguim",
  "Comissário Gordon",
  "Alfred Pennyworth",
  "Carmine Falcone",
];



filme.listaPersonagens = listaPersonagens

console.log(filme.listaElenco[0], filme.listaPersonagens[0]);
console.log(filme.listaElenco[1], filme.listaPersonagens[1]);
console.log(filme.listaElenco[2], filme.listaPersonagens[2]);
console.log(filme.listaElenco[3], filme.listaPersonagens[3]);
console.log(filme.listaElenco[4], filme.listaPersonagens[4]);
console.log(filme.listaElenco[5], filme.listaPersonagens[5]);
console.log(filme.listaElenco[6], filme.listaPersonagens[6]);

filme.listaElenco[0] = 'Xuxa';

console.log(filme.listaElenco[0], filme.listaPersonagens[0]);

console.log(filme);
console.log(filme.listaElenco);
console.log(filme.listaPersonagens);