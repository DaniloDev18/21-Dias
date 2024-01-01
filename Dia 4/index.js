let Fome = (prompt("Você está com fome ?"))
let Dinheiro = (prompt("Você tem dinheiro ?"))
let Restaurante = (prompt("O restaurante está aberto ?"))

if(Fome === "não" || Dinheiro == "não" ){
    console.log("Hoje a janta será em casa")
    }
if(Fome === "sim" && Dinheiro == "sim" && Restaurante == "não"){
        console.log("Peça um delivery")
        }
if(Fome === "sim" && Dinheiro == "sim" && Restaurante == "sim"){
    console.log("Hoje o jantar será no seu restaurante preferido")
}