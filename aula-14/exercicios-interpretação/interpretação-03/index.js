
// Leia o c�digo

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// a) O que vai ser impresso no console?
console.log(minhaFuncao(pessoa, "backender"))
// false

console.log(minhaFuncao(pessoa, "altura"))
// undefined



// b) Explique o valor impresso no console. Voc� sabe por que isso aconteceu?
/**
 * pessoa["backender"] tem o valor falso atribuido dentro do objeto pesso
 * 
 * pessoa["altura"] retornou o undefined por que propriedade altura não existe detro do objeto pessoa
 * então nada é encontrado, o mesmo aconteceria se fizessemos un console.log(pessoa[3]);
 */