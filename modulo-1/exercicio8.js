// Exercício 8: crescente
const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Digite um número: "));
let num2 = parseFloat(prompt("Digite um número diferente: "));

if (num1 > num2) {
    console.log(`Ordem crescente: ${num2}, ${num1}`);
} else {
    console.log(`Ordem crescente: ${num1}, ${num2}`);
}