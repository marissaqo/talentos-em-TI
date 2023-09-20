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

console.log(filme.nome);
console.log(filme.ano);
console.log(filme.diretor);
console.log(filme.listaElenco);
console.log(filme.jaViu);

console.log(filme["nome"]);
console.log(filme["ano"]);
console.log(filme["diretor"]);
console.log(filme["listaElenco"]);
console.log(filme["jaViu"]);
