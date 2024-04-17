// Exercício 15: while - média ponderada
const prompt = require('prompt-sync')();

let num = parseFloat(prompt("Digite um número: "));
let peso = parseFloat(prompt("Digite o peso: "));
let soma = 0;
let contador = 0;

while (num !== 0) {
    soma += num*peso;
    contador += peso;
    num = parseFloat(prompt("Digite um número: "));
    peso = parseFloat(prompt("Digite o peso: "));
}

console.log("A media é igual a", soma/(contador));