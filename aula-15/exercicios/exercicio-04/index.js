// exemplo switch case

// let paisDeOrigem;

// paisDeOrigem = 'EUA';

// switch (paisDeOrigem) {
//   case "Brasil":
//     console.log("brasileiro");
//     break;

//   case "EUA":
//     console.log("norte americano");
//     break;

//   case "Inglaterra":
//     console.log("ingles");
//     break;

//   default:
//     console.log("nacionalidade não encontrada");
//     break;
// }

let pokemonEscolhido = prompt(
  "Digite o seu primeiro pokemon entre os disponiveis \n 1) Charmander \n 2) Bulbassauro \n 3) Squirtle"
).toLowerCase();

switch (pokemonEscolhido) {
  case "charmander":
    console.log("Charmander - tipo fogo");
    break;

  case "bulbassauro":
    console.log("Bulbassauro - tipo folhas");
    break;

  case "squirtle":
    console.log("Squirtle - tipo agua");
    break;

  default:
    console.log("Pokemon indisponivel");
    break;
}
