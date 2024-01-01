let Fome = prompt("Você está com fome ?")
let Dinheiro = prompt("Você está com dinheiro ?")
let Restaurante = prompt("O restaurante está aberto ?")

if (Fome != "sim" || Dinheiro != "sim"){
 console.log("Hoje a janta será em casa")
}
else if (Dinheiro == "sim" && Restaurante == "sim") {
    console.log("Hoje o jantar será no seu restaurante preferido")
}
else{
    console.log("Peça um delivery")
}