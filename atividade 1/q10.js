"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Circulo {
    raio;
    constructor(raio) {
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * this.raio ** 2;
    }
    calcularPerimetro() {
        return 2 * Math.PI * this.raio;
    }
}
let circulo = new Circulo(5);
console.log("Área:", circulo.calcularArea().toFixed(2));
console.log("Perímetro:", circulo.calcularPerimetro().toFixed(2));
//# sourceMappingURL=q10.js.map