let num1 = Number(prompt("Insira um número"))
let num2 = Number(prompt("Insira outro número"))
let opção = Number(prompt("Qual operação desejar realizar?"))

switch(opção){
    case 1: 
        console.log("A operação feita foi a de SOMA e o resultado foi")
        console.log(num1 + num2)
        break;
    case 2:
        console.log("A operação feita foi a de SUBTRAÇÃO e o resultado foi")
        console.log(num1 - num2)
        break;
    case 3:
        console.log("A operação feita foi a de MULTIPLICAÇÃO e o resultado foi")
        console.log(num1 * num2)
        break;
    case 4: 
    console.log("A operação feita foi a de DIVISÃO e o resultado foi")
        console.log(num1 / num2)
        break;
    case 5:
        console.log("A operação feita foi a de MÓDULO e o resultado foi")
        console.log(num1 % num2)
        break;
}