let Nome = ""
let Idade = 0
let Altura = 0
let Peso = 0

Nome = prompt("Insira seu Nome")
Idade = parseInt(prompt("Insira sua Idade"))
Altura = parseFloat(prompt("Insira sua Altura"))
Peso = parseInt(prompt("Insira seu Peso"))


let anoDeNascimento = 0
anoDeNascimento =(2023 - Idade)

let IMC = 0
IMC = Peso / (Altura * Altura)

