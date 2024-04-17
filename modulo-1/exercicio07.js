// Exercício 7: preço das maçãs
const prompt = require('prompt-sync')();

let numMacas = parseInt(prompt("Digite a quantidade de maçãs: "));

let aPagar;

if (numMacas >= 12) {
    aPagar = 0.25 * numMacas;
} else {
    aPagar = 0.3 * numMacas;
}

console.log("Total da compra: R$", aPagar);
