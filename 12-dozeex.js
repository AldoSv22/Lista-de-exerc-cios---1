const prompt = require('prompt-sync')();

let tabuada = Number(prompt('escolha um numero para ver a tabuada:'))

let resultado = []

for(let i = 1; i <= 10; i++){
   resultado.push(`${tabuada} x ${i} = ${tabuada * i}`);
    
    
}

for (let linha of resultado) {
    console.log(linha);
}