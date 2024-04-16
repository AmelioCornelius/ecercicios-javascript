// Exercício 1: Celsius para Fahrenheit
const prompt = require('prompt-sync')();

let tempCelsius = prompt("Digite a temperatura em graus Celsius: ");

let tempFahrenheit = (tempCelsius*1.8) + 32;
console.log(`A temperatura em Fahrenheit é de: ${tempFahrenheit}°F`);