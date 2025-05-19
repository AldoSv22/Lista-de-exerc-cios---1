const prompt = require('prompt-sync')();

console.log('Escolha uma prato italiano para saber mais:')
console.log("1 - Carbonara");
console.log("2 - Lasanha");
console.log("3 - Risoto");
console.log("4 - Sair");

let opcao = prompt('Digite o numero de uma opção:')

switch (opcao) {
    case '1':
        console.log('Carbonara: prato de massa com molho à base de ovos, queijo pecorino, pancetta e pimenta.')
        break;
    case '2':
        console.log('Lasanha: prato feito com camadas de massa, molho de tomate, carne moída e queijo.')
        break;
    case '3':
        console.log('Risoto: prato cremoso feito com arroz arbóreo, caldo, queijo e ingredientes variados.')
        break;
    case '4':
        console.log('Saindo... Bom apetite')
        break;
    default:
        console.log('Opção inválida! Por favor, escolha um número entre 1 e 4.');
}