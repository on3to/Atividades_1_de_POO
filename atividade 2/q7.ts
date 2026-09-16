const numeros = [2, 4, 6, 8, 10];

const dobro = numeros.map((numero) => numero * 2);

console.log(numeros);
console.log(dobro);

const soma = dobro.reduce((total, numero) => total + numero, 0);

console.log(soma);