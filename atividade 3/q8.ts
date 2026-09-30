class Conta {
    numero: string;
    saldo: number;

    // O construtor inicializa as variáveis quando a classe é instanciada
    constructor(numero: string, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valor: number): boolean {
        if (this.saldo - valor < 0) {
            return false;
        }
        this.saldo -= valor;
        return true;
    }

    // ... restante dos seus métodos depositar e transferir
}