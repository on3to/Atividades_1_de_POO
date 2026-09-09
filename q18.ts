class Numero {
    valor: number = 0;

    ehPar(): boolean {
        return this.valor % 2 == 0;
    }

    ehImpar(): boolean {
        return !this.ehPar();
    }

    somar(outroNumero: number): number {
        return this.valor + outroNumero;
    }

    somarNumeros(outroNumero: Numero): Numero {
        let resultado: Numero = new Numero();
        resultado.valor = this.valor + outroNumero.valor;

        return resultado;
    }
}