"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SituacaoFinanceira {
    valorCreditos;
    valorDebitos;
    constructor(valorCreditos, valorDebitos) {
        this.valorCreditos = valorCreditos;
        this.valorDebitos = valorDebitos;
    }
    calcularSaldo() {
        return this.valorCreditos - this.valorDebitos;
    }
}
let situacao = new SituacaoFinanceira(5000, 2000);
console.log("Saldo:", situacao.calcularSaldo());
//# sourceMappingURL=q11.js.map