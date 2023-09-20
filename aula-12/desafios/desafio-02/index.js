/**
 *
 * Teorema de Pitágoras
 *
 * Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos,
 * calculando o valor da hipotenusa e retornando esse valor.
 * Invoque a função e imprima o resultado no console.
 *
 * A fórmula do teorema é: "hip² = a² + b²", onde "hip" é a hipotenusa e "a" e "b" são os catetos.
 * É necessário isolar a hipotenusa, então ao final temos: "hip = raiz(a² + b²)"".
 *
 **/

const calculaTeoremaPitagoras = (a, b) => {
  let hipotenusa = Math.sqrt(a**2 + b**2);

  return hipotenusa;
};

console.log(calculaTeoremaPitagoras(2, 4));
