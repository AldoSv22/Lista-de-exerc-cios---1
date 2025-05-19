const prompt = require('prompt-sync')();

let idadePessoa = Number(prompt('Digite a sua idade:'))
if (idadePessoa > 0 && idadePessoa <= 12){
    console.log('Você é uma criança')
} else if (idadePessoa > 12 && idadePessoa <= 18){
    console.log('Você é um adolescente')
} else if (idadePessoa > 18 && idadePessoa <= 59){
    console.log('Você é um adulto')
} else if (idadePessoa > 59 && idadePessoa <=80){
    console.log('você é um idoso')
} else if (idadePessoa > 80){
    console.log('você é um idoso de idade mais avançada')
} else if (isNaN(idadePessoa) || idadePessoa <= 0){
   console.log('ERRO: Idade inválida. Digite um número positivo.')
} 

