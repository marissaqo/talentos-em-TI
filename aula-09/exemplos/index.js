const racasCachorro = [
  "caramelo",
  "pitbul",
  "pintcher",
  "salsicha",
  "rotweiller",
];

const numero = Number(prompt("Digite um numero de 0 a 4"));

if (racasCachorro[numero] == undefined) {
  console.log("raca nao esta na lista");
} else {
  console.log(racasCachorro[numero]);
}

console.log(racasCachorro.includes('caramelo'))
console.log(racasCachorro.includes('pug'))

racasCachorro.push('pug')

console.log(racasCachorro);

racasCachorro.pop()

console.log(racasCachorro);

racasCachorro.splice(0, 1)

console.log(racasCachorro);