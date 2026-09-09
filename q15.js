"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function teste() {
    let x = 10;
    console.log("Início do programa");
    if (x > 5) {
        console.log("x é maior que 5");
        return;
        console.log("Essa linha é inatingível!");
    }
    console.log("Fim do programa");
}
//"console.log("Essa linha é inatingível!");" n sera executado pots tem um "return"antes dela, portanto o TypeScript acusa que o código é inatingível
//# sourceMappingURL=q15.js.map