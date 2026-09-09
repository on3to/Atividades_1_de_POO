"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Retangulo {
    largura;
    altura;
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }
    calcularArea() {
        return this.largura * this.altura;
    }
    calcularPerimetro() {
        return 2 * (this.largura + this.altura);
    }
}
let retangulo = new Retangulo(10, 5);
console.log("Área:", retangulo.calcularArea());
console.log("Perímetro:", retangulo.calcularPerimetro());
//# sourceMappingURL=q8.js.map