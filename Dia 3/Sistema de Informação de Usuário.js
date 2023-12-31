
let Nome = prompt("Insira seu Nome")
let Idade = Number(prompt("Insira sua Idade"))
let Altura = Number(prompt("Insira sua Altura"))
let Peso = Number(prompt("Insira seu Peso"))

let anoDeNascimento = 0
anoDeNascimento =(2023 - Idade)
console.log("Ano de Nascimento")
console.log(anoDeNascimento)

let IMC = 0
IMC = Peso / (Altura * Altura)
console.log("IMC")
console.log(IMC)

console.log("Olá " + Nome + ", você tem "+ Idade +" anos, nasceu em " + anoDeNascimento +" , tem " + Altura +" de altura, pesa " + Peso +" Kg seu IMC é " + IMC +" Kg/m2 ")