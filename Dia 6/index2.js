// Exercício 2 -> Tabuada do um número "X" e a tabuada dos dois próximos números:

let tabuada = Number(prompt("Insira um número!"))

for (let I = tabuada; I <= tabuada + 2; I++){
    document.write("<p> Tabuada do " + I )

    for (let J = 0; J <= 10; J++)
        document.write("<br>" + I + " x " + J + " = " + (I*J))
}