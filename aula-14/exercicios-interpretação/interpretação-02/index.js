
// Leia o c�digo

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = { ...cachorro, nome: "Juba" }

const tartaruga = { ...gato, nome: gato.nome.replaceAll("a", "o") }

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// a) O que vai ser impresso no console?

console.log(cachorro)
//  {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

console.log(gato)
//  {
// 	idade: 3, 
// 	raca: "SRD"
//  nome: "Juba" }


console.log(tartaruga)
// idade: 3, 
// raca: "SRD"
// nome:'Jubo' }

// b) O que faz a sintaxe dos tr�s pontos antes do nome de um objeto?
// é um spread, server pra espalhar um objeto em outro