// Exercício 14: while - média
const prompt = require('prompt-sync')();

let num = 1;
let soma = 0;
let contador = 0;

while (num !== 0) {
    num = parseFloat(prompt("Digite um número: "));
    soma += num;
    contador++;
}

console.log("A media é igual a", soma/(contador-1));