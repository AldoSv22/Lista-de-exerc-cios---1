const prompt = require('prompt-sync')();

let Nota = Number(prompt('Digite a sua nota:'))

if(Nota < 0 || Nota > 10 ){
     console.log('ERRO: Nota inválida! Digite um valor entre 0 e 10.');
}else if (Nota === 0){
    console.log('Você está reprovado')
}else if (Nota >= 7){
    console.log('Você está APROVADO')
}else if (Nota <=6){
    console.log('Você está de recuperação')
}