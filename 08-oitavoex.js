const prompt = require('prompt-sync')();

let Valor1 = Number(prompt('Informe um valor:'))
let Valor2 = Number(prompt('Informe outro valor:'))

if (Valor1 === Valor2){
    console.log('Error: os dois valores não podem ser igual')
} else{
    let menor = Math.min(Valor1, Valor2);
    let maior = Math.max(Valor1, Valor2);

for(let i = menor; i < maior + 1 ; i++){
        console.log(i)
    }

}

