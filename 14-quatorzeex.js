const prompt = require('prompt-sync')();

let numero = Number(prompt('Escolha um número positivo para o fatorial:'))
let fatorial = 1

if (numero < 0 ){
    console.log('Error: Não existe fatorial de número negativo, informe umm número positivo')
}

for(let i = 1;i < numero + 1; i++){
    fatorial *= i
}

console.log(`O fatorial de ${numero} é: ${fatorial}`)