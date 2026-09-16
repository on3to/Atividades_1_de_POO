class SituacaoFinanceira {
    valorCreditos: number;
    valorDebitos: number;

    constructor(valorCreditos: number, valorDebitos: number) {
        this.valorCreditos = valorCreditos;
        this.valorDebitos = valorDebitos;
    }

    calcularSaldo(): number {
        return this.valorCreditos - this.valorDebitos;
    }
}

let situacao = new SituacaoFinanceira(5000, 2000);

console.log("Saldo:", situacao.calcularSaldo());