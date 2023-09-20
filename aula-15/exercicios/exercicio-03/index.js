function verificaNumeros(n1, n2) {
    if (n1 > n2) {
      return `Primeiro numero é maior que o segundo`;
    } else if(n1 < n2) {
      return `Primeiro numero não é maior que o segundo`;
    }else{
        return `Numeros são iguais`;
    }
  }
  
  let num1 = Number(prompt("Digite o primeiro numero"));
  let num2 = Number(prompt("Digite o segundo numero"));
  
  console.log(verificaNumeros(num1, num2));
  