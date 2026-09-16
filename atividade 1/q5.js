"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//A-ex1:
let a = 10;
let b = "5";
console.log(a + b);
//O resultado e 105 pq o typescript permite que o codigo seja compilado em javascript
//B-ex2:
let a = 10;
let b = "5";
console.log(a + b);
//Aqui o TypeScript pode apresentar erro de tipo na compilação, pois está tentando realizar uma operação aritmética entre boolean e number.
//C-ex3:
console.log(0 == false);
console.log("" == false);
console.log(null == undefined);
//O TypeScript mantém o comportamento do JavaScript nesse caso, pois o operador == continua realizando conversão de tipos.
//# sourceMappingURL=q5.js.map