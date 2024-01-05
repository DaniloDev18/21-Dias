let Abastecer = prompt("Bom dia, qual das opções você deseja abastecer, gasolina ou alcool ? Ou deseja apenas calibrar os pneus ?")
let valor 

switch(Abastecer){
    case "gasolina":
        valor = Number(prompt("Com quantos reais você deseja abastecer ?"))
        console.log("A quantidade de litros abastecido foram " + valor / 5 +" litros de gasolina")
        break;

    case "alcool": 
        valor = Number(prompt("Com quantos reais você deseja abastecer ?"))
        console.log("A quantidade de litros abastecidos foram " + valor / 3 +" litros de alcool")
        break;

    case "calibrar os pneus": 
        console.log("pneus calibrados com sucesso")
        break;

    default:
        console.log("Infelizmente não temos, favor procurar em outro posto de gasolina.")
        break;
}
