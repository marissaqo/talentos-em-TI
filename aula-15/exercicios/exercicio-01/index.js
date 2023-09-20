function verificaNumeros(n1, n2) {
  if (n1 === n2) {
    return `Sucesso! Numeros são iguais`;
  }
  return `Infelizmente os numeros são diferentes`;
}

let num1 = Number(prompt("Digite o primeiro numero"));
let num2 = Number(prompt("Digite o segundo numero"));

console.log(verificaNumeros(num1, num2));
