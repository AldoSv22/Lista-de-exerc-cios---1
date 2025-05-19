const prompt = require('prompt-sync')();

let Peso = Number(prompt('Informe seu peso em kg:'))
let Altura = Number(prompt('Informe sua altura em metros, mas utilize o ponto ao inves da virgula, exemplo(1.75):'))

let IMC = Peso / (Altura * Altura)
console.log("Seu IMC é: " + IMC.toFixed(2));

if (IMC < 18.5) {
    console.log("Você está abaixo do peso.");
} else if (IMC < 25) {
    console.log("Você está com peso normal.");
} else if (IMC < 30) {
    console.log("Você está com sobrepeso.");
} else if (IMC < 35) {
    console.log("Obesidade grau I.");
} else if (IMC < 40) {
    console.log("Obesidade grau II.");
} else {
    console.log("Obesidade grau III (mórbida).");
}