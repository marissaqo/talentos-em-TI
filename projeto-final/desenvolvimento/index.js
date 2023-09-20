// Projeto Abrigos

let continuar = true
let dados = []

// Função para cadastro
function cadastrar() {
  console.log("Função de cadastro")

  let nomeAbrigo = prompt("Nome do abrigo:")
  let endereco = prompt("Endereço do abrigo:")
  let telefone = prompt("Telefone do abrigo:")
  let capacidade = Number(prompt("Capacidade do abrigo:"))
  let cidade = prompt("Cidade do abrigo:")

  let novoAbrigo = {
    codigo: Math.floor(Math.random() * 100),
    nomeAbrigo,
    endereco,
    telefone,
    capacidade,
    cidade,
  }

  dados.push(novoAbrigo)
}

// Função para listar
function listar() {
  console.log("Função de lista")

  console.log(
    "Código | Nome do Abrigo | Endereço | Telefone | Capacidade | Cidade \n"
  )
  console.log("-------------------------------------------------- \n")

  for (let i = 0; i < dados.length; i++) {
    dados[i].codigo = i

    console.log(
      `${dados[i].codigo} | ${dados[i].nomeAbrigo} | ${dados[i].endereco} | ${dados[i].telefone} | ${dados[i].capacidade} | ${dados[i].cidade} \n`
    )
  }
}

// Função para buscar
function buscar() {
  console.log("Função de busca")

  let abrigoProcurado = prompt(
    "Para procurar a cidade digite: \n Cidade do abrigo \n Nome do abrigo \n Endereço do abrigo"
  )

  for (abrigoProcurado in dados) {
    if (Object.hasOwnProperty.call(dados, abrigoProcurado)) {
      const resultado = dados[abrigoProcurado]

      console.log(
        "Código | Nome do Abrigo | Endereço | Telefone | Capacidade | Cidade \n"
      )
      console.log(`Você está procurando por ${resultado.cidade}`)
      console.log("-------------------------------------------------- \n")
      console.log("LISTAGEM DE ABRIGOS: \n")
      console.log("-------------------------------------------------- \n")
      console.log(
        "Código | Nome do Abrigo | Endereço | Telefone | Capacidade | Cidade \n"
      )
      console.log("-------------------------------------------------- \n")
      console.log(
        `${resultado.codigo} | ${resultado.nomeAbrigo} | ${resultado.endereco} | ${resultado.telefone} | ${resultado.capacidade} | ${resultado.cidade} \n`
      )
    }
  }

}

// Função para deletar
function deletar() {
  console.log("Função de deletar")

  let nomeDoAbrigoParaDeletar = prompt("Digite o nome do abrigo que deseja deletar")

  for (let i = 0; i < dados.length; i++) {
    if (nomeDoAbrigoParaDeletar === dados[i].nomeAbrigo) {
      dados.splice(dados[i].nomeAbrigo, 1)
    }
  }
}

// Função para editar
function editar() {
  console.log("Função de editar");
  

  let nomeDoAbrigoParaEditar = prompt(
    "Digite o nome do abrigo que deseja editar"
  )
  
  for (let i = 0; i < dados.length; i++) {
    if (nomeDoAbrigoParaEditar === dados[i].nomeAbrigo) {
      let nomeAbrigo = prompt("digite o nome do abrigo")
      let endereco = prompt("Digite o endereço do abrigo")
      let telefone = prompt("Digite o telefone do abrigo")
      let capacidade = Number(prompt("Digite a capacidade do abrigo"))
      let cidade = prompt("Digite a cidade do abrigo")

      let novoAbrigo = {
        nomeAbrigo,
        endereco,
        telefone,
        capacidade,
        cidade,
      }

      dados[i] = novoAbrigo
    }
  }
}

// Função para sair
function sair() {
  continuar = false
  console.log("Tchau! Para reiniciar, atualize a aba do navegador.")
}

// Loop para perguntar ao usuário
while (continuar) {
  // Formatar pergunta
  let pergunta = "ABRIGOS TEMPORÁRIOS\n"
  pergunta += "-------------------------\n"
  pergunta += "Escolha uma opção:\n"
  pergunta += "1. Cadastrar abrigo\n"
  pergunta += "2. Listar abrigos\n"
  pergunta += "3. Procurar abrigo\n"
  pergunta += "4. Deletar abrigo da lista\n"
  pergunta += "5. Editar abrigo da lista\n"
  pergunta += "6. Sair"

  // Guardar resposta
  let resposta = Number(prompt(pergunta))

  // Identificar resposta e chamar função
  switch (resposta) {
    case 1:
      cadastrar()
      break
    case 2:
      listar()
      break
    case 3:
      buscar()
      break
    case 4:
      deletar()
      break
    case 5:
      editar()
      break
    case 6:
      sair()
      break
  }
}