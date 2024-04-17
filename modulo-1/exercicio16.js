// Exercício 16: números primos
let i = 0;
let menor = 100;
let divisivel = 0;
let divisor = 1;

while (i < 50) {
    divisor = 1;
    divisivel = 0;
    while(divisor <= menor) {
        if (menor % divisor === 0 ) {
            divisivel++;
        }
        divisor++;
    }
    if (divisivel === 2){
        console.log(menor);
        i++;
    }
    menor++;
}