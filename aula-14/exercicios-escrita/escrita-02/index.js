/**
 *
 * Resolva os passos a seguir
 *
 * a) Crie dois "objetos" diferentes com as seguintes propriedades: nome, idade e profiss�o.
 *
 * b) Escreva uma "fun��o" que receba um "objeto" de cada vez e retorne um "array" com as seguintes informa��es:
 * - O valor de "nome".
 * - O numero de caracteres do valor "nome".
 * - O valor de "idade".
 * - O valor de "profiss�o".
 * - O numero de caracteres do valor "profiss�o".
 *
 **/

const pessoa = {
	nome: "Bruno",
	idade: 23,
	profissao: "Instrutor",
  };
  
  function minhaFuncao(pessoa) {
	let resultado = [];
  
	// Desenvolver sua logica
  
	let qtdCaracteresNome = pessoa.nome.length;
	let qtdCaracteresProfissao = pessoa.profissao.length;
  
	resultado.push(pessoa.nome);
	resultado.push(qtdCaracteresNome);
	resultado.push(pessoa.idade);
	resultado.push(pessoa.profissao);
	resultado.push(qtdCaracteresProfissao);
  
	return resultado;
  }
  
  console.log(minhaFuncao(pessoa));
  // Retorno: ["Bruno", 5, 23, "Instrutor", 9]