"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Numero {
    valor = 0;
    ehPar() {
        return this.valor % 2 == 0;
    }
    ehImpar() {
        return !this.ehPar();
    }
    somar(outroNumero) {
        return this.valor + outroNumero;
    }
    somarNumeros(outroNumero) {
        let resultado = new Numero();
        resultado.valor = this.valor + outroNumero.valor;
        return resultado;
    }
}
//# sourceMappingURL=q18.js.map