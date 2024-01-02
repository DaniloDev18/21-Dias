let Nome = (prompt('Qual seu nome ?'))
let Idade = Number(prompt("Qual sua idade ?"))
let cartaDeMotorista = prompt("Possui carteira ?")
let Carro = prompt("Você tem algum carro ?")

if(Idade < 18 || cartaDeMotorista == "não") {
 console.log(Nome+ ", você não pode dirigir.")
}
else if(Carro != "sim"){
console.log(Nome+ ", você pode dirigir mas não tem um carro.")
}
if (Idade >= 18 && cartaDeMotorista == "sim" && Carro == "sim"){
console.log( Nome +",você será o motorista.")
}