const prompt = require('prompt-sync')();

let numerointeiro = prompt('Informe um número inteiro:')

if(numerointeiro < 0){
    console.log('Error: o número não é inteiro')
}else{
    let i = 0
    do{
        console.log(numerointeiro)
        i++
    } while ( i < 10)
}