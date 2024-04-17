// Exercício 13: tabuada
const prompt = require('prompt-sync')();

let n1 = parseFloat(prompt("Digite o primeiro valor: "));
let n2 = parseFloat(prompt("Digite o segundo valor: "));
let n3 = parseFloat(prompt("Digite o terceiro valor: "));
let n4 = parseFloat(prompt("Digite o quarto valor: "));
let n5 = parseFloat(prompt("Digite o quinto valor: "));

for (let i = 0; i <= n1; i++) {
    console.log(`${n1} * ${i} = `, n1 * i)
}
console.log("\n");

for (let i = 0; i <= n2; i++) {
    console.log(`${n2} * ${i} = `, n2 * i)
}
console.log("\n");

for (let i = 0; i <= n3; i++) {
    console.log(`${n3} * ${i} = `, n3 * i)
}
console.log("\n");

for (let i = 0; i <= n4; i++) {
    console.log(`${n4} * ${i} = `, n4 * i)
}
console.log("\n");

for (let i = 0; i <= n5; i++) {
    console.log(`${n5} * ${i} = `, n5 * i)
}
console.log("\n");