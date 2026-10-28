class Cronometro {
  private segundos: number;

  constructor() {
    this.segundos = 0;
  }

  avancar(valor: number): void {
    if (valor > 0) {
      this.segundos += valor;
    }
  }

  zerar(): void {
    this.segundos = 0;
  }

  emMinutos(): number {
    return this.segundos / 60;
  }

  getSegundos(): number {
    return this.segundos;
  }
}

// --- TESTES ---
console.log("=== Teste Cronometro ===");
const cron1 = new Cronometro();
cron1.avancar(90);
cron1.avancar(30);
console.log(`Segundos: ${cron1.getSegundos()}`); // Esperado: 120
console.log(`Minutos: ${cron1.emMinutos()}`);     // Esperado: 2

cron1.avancar(-20);
console.log(`Após tentar avançar -20s: ${cron1.getSegundos()}s`); // Esperado: 120

cron1.zerar();
console.log(`Após zerar: ${cron1.getSegundos()}s e ${cron1.emMinutos()}min`); // Esperado: 0 e 0

const cron2 = new Cronometro();
cron2.avancar(45);
console.log(`Cronômetro 1: ${cron1.getSegundos()}s | Cronômetro 2: ${cron2.getSegundos()}s`); // Independentes