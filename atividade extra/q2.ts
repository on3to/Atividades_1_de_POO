class Estacionamento {
  private placa: string;
  private horas: number;

  constructor(placa: string) {
    this.placa = placa;
    this.horas = 0;
  }

  registrarPermanencia(horas: number): void {
    if (horas >= 0) {
      this.horas = horas;
    }
  }

  calcularHorasCobradas(): number {
    return Math.ceil(this.horas);
  }

  calcularValor(): number {
    const horasCobradas = this.calcularHorasCobradas();
    if (horasCobradas === 0) {
      return 0;
    }
    return 8 + (horasCobradas - 1) * 5;
  }

  emitirTicket(): string {
    const horasCobradas = this.calcularHorasCobradas();
    const valorTotal = this.calcularValor();
    return `Placa: ${this.placa} | Horas cobradas: ${horasCobradas} | Valor: R$ ${valorTotal.toFixed(2)}`;
  }

  getHoras(): number {
    return this.horas;
  }
}

// --- TESTES ---
console.log("\n=== Teste Estacionamento ===");
const est = new Estacionamento("ABC-1234");

const testesPermanencia = [0, 1, 1.2, 3.5];
testesPermanencia.forEach((h) => {
  est.registrarPermanencia(h);
  console.log(`Permanência de ${h}h -> Valor: R$ ${est.calcularValor().toFixed(2)}`);
});
// Esperados: R$ 0.00, R$ 8.00, R$ 13.00 e R$ 23.00

est.registrarPermanencia(-2);
console.log(`Após tentar registar -2h (preservado): ${est.getHoras()}h`); // Esperado: 3.5h
console.log(est.emitirTicket());