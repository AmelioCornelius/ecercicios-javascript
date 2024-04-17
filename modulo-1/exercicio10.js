// Exercício 10: repetir número
const prompt = require('prompt-sync')();

let num = parseInt(prompt("Digite um número inteiro: "));

for (let i = 0; i < 10; i++) {
    console.log(num);
}