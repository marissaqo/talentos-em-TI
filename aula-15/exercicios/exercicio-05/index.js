let idade = Number(prompt("Qual sua idade?"));
let concluiuEM = prompt(
  "Concluiu o ensino médio? \n sim \n não"
).toLocaleLowerCase();
let cursaFaculdade = prompt(
  "Esta cursando uma faculdade? \n sim \n não"
).toLocaleLowerCase();

console.log(validaMatricula(idade, concluiuEM, cursaFaculdade));

function validaMatricula(idade, concluiuEM, cursaFaculdade) {
  if (idade >= 18 && concluiuEM === "sim" && cursaFaculdade === "não") {
    return `Pode ser matriculado`;
  } else {
    return `Não pode ser matriculado`;
  }
}
