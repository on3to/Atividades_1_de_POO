class Equipamento {
    ligado: boolean = false;

    ligar(): void {
        if (!this.ligado) {
            this.ligado = true;
        }
    }

    desligar(): void {
        if (this.ligado) {
            this.ligado = false;
        }
    }

    inverter(): void {
        this.ligado = !this.ligado;
    }

    estaLigado(): boolean {
        return this.ligado;
    }
}

let eq = new Equipamento();
eq.ligar();
console.log("Está ligado?", eq.estaLigado());
eq.inverter();
console.log("Está ligado após inverter?", eq.estaLigado());
eq.desligar();