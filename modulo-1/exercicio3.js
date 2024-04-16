// Exercício 3: quatro números
const prompt = require('prompt-sync')();

let num1 = parseInt(prompt("Digite o primeiro número: "));
let num2 = parseInt(prompt("Digite o segundo número: "));
let num3 = parseInt(prompt("Digite o terceiro número: "));
let num4 = parseInt(prompt("Digite o quarto número: "));

// operações
num4 = num1 + num2 + num3 + num4;

num1 = num1 + 25;

num2 = num2 * 3;

num3 = num3/100 * 0.12;

console.log(`Os novos valores dos números são:\nNúmero 1: ${num1}\nNúmero 2: ${num2}\nNúmero 3: ${num3}\nNúmero 4: ${num4}\n`);