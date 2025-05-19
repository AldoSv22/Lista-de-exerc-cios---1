const prompt = require('prompt-sync')();
let soma = []

let a = Number(prompt('Informe o primeiro número:'))
let b = Number(prompt('Informe o segundo número:'))
let c = Number(prompt('Informe o terceiro número:'))
let d = Number(prompt('Informe o quarto número:'))
let e = Number(prompt('Informe o quinto número:'))

soma.push(a,b,c,d,e)
let resultado = 0
for(let i =0;i < soma.length; i++){
    resultado += soma[i]
}

console.log('O resultado da soma dos cinco números é igual a:' + resultado)