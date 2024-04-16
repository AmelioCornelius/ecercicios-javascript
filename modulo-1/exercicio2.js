// Exercício 2: Eleição
const prompt = require('prompt-sync')();

let numEleitores = parseInt(prompt("Digite o número de eleitores: "));
let votosBrancos = parseInt(prompt("Digite o número de votos brancos: "));
let votosNulos = parseInt(prompt("Digite o número de votos nulos: "));
let votosValidos = parseInt(prompt("Digite o número de votos validos: "));

let percVotosBrancos = votosBrancos/numEleitores * 100;
let percVotosNulos = votosNulos/numEleitores * 100;
let percVotosValidos = votosValidos/numEleitores * 100;

console.log(`O percentual de votos brancos foi de: ${percVotosBrancos}%.\nO percentual de votos nulos foi de: ${percVotosNulos}%.\nO percentual de votos válidos foi de: ${percVotosValidos}%.`);