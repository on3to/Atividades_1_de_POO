//A-ex1:
let a = 10;
let b = "5";

console.log(a + b);
//O resultado e 105 ja que B e uma string, então o programa adiciona "5" a 10=105

//B-ex2:
let x = true;
let y = 2;

console.log(x + y);

//Resultado e 3 ja que o JavaScript converte true em 1

//C-ex3:
console.log(0 == false);
console.log("" == false);
console.log(null == undefined);
//o resultado e true ja que o operador == realiza conversão de tipos antes da comparação. Por isso, valores de tipos diferentes podem ser considerados iguais.