const numeros = [1, 2, 3, 4, 5];

const dobrados = numeros.map((numero) => numero * 2);

const total = dobrados.reduce((soma, numero) => soma + numero, 0);

console.log(dobrados);
console.log(total);