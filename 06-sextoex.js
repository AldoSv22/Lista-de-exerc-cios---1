const prompt = require('prompt-sync')();

console.log('Informe três valores para formar um triângulo:');

let a = Number(prompt("Digite o lado A: "));
let b = Number(prompt("Digite o lado B: "));
let c = Number(prompt("Digite o lado C: "));

if (a + b > c && a + c > b && b + c > a) {
    console.log('Os lados formam um triângulo.');

    if (a === b && b === c) {
        console.log('Esse é um triângulo EQUILÁTERO.');
    } else if (a === b || a === c || b === c) {
        console.log('Esse é um triângulo ISÓSCELES.');
    } else {
        console.log('Esse é um triângulo ESCALENO.');
    }

} else {
    console.log('Os lados NÃO formam um triângulo.');
}