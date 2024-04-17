// Exercício 11: par ou ímpar
const prompt = require('prompt-sync')();

let valor = prompt("Digite um valor: ");

while (valor > 0) {
    if (valor % 2 === 0) {
        console.log(`${valor} é Par`);
    } else {
        console.log(`${valor} é Ìmpar`);
    }
    valor = prompt("Digite um valor: ");
}