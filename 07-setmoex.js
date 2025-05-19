const prompt = require('prompt-sync')();

let maças = Number(prompt('Quantas maças foram compradas:'))
let valor = 0

if(maças < 12 ){
    valor = 0.30
}else if(maças >= 12){
    valor = 0.25
}

valorTotal = maças * valor

console.log("O Valor total da compra foi: " + valorTotal )

