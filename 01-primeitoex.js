const prompt = require('prompt-sync')();

let numero = Number(prompt('Digite um numero:'))
if(numero < 0){
    console.log('Digite um número inteiro, exemplo: 5')
}
    if(numero % 2 == 0){
        console.log('Esse número é PAR')
    }else{
        console.log('Esse número é IMPAR')
    }
