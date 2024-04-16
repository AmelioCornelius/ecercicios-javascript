// Exercício 6: triangulo
const prompt = require('prompt-sync')();

let ladoA = parseInt(prompt("Digite o tamanho do lado 1: "));
let ladoB = parseInt(prompt("Digite o tamanho do lado 2: "));
let ladoC = parseInt(prompt("Digite o tamanho do lado 3: "));

let tipo;

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    if (ladoA === ladoB && ladoB === ladoC) {
        tipo = 'equilátero';
    } else if (ladoA !== ladoB && ladoB !== ladoC) {
        tipo = 'escaleno';
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        tipo = 'isósceles';
    }

    console.log(`Forma um triângulo ${tipo}.`);
} else {
    console.log("Não forma um triângulo.");
}