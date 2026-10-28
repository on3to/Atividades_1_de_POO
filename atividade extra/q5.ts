class RegistroTemperaturas {
  private temperaturas: number[];
  private limiteAlerta: number;

  constructor() {
    this.temperaturas = [];
    this.limiteAlerta = 30;
  }

  adicionar(temperatura: number): void {
    this.temperaturas.push(temperatura);
  }

  alterarLimite(limite: number): void {
    this.limiteAlerta = limite;
  }

  listar(): string {
    let resultado = "";
    this.temperaturas.forEach((temp, index) => {
      resultado += `Dia ${index + 1}: ${temp}°C\n`;
    });
    return resultado.trim();
  }

  acimaDoLimite(): number[] {
    return this.temperaturas.filter((temp) => temp > this.limiteAlerta);
  }

  converterParaFahrenheit(): number[] {
    return this.temperaturas.map((c) => c * 1.8 + 32);
  }

  calcularMedia(): number {
    if (this.temperaturas.length === 0) {
      return 0;
    }
    const soma = this.temperaturas.reduce((acc, curr) => acc + curr, 0);
    return soma / this.temperaturas.length;
  }
}

// --- TESTES ---
console.log("\n=== Teste RegistroTemperaturas ===");
const reg = new RegistroTemperaturas();

[28, 31, 29, 35, 32, 27, 30].forEach((t) => reg.adicionar(t));

console.log(`Listagem:\n${reg.listar()}`);
console.log(`Média: ${reg.calcularMedia().toFixed(2)}°C`); // Esperado: ~30.29°C
console.log("Alertas (> 30°C):", reg.acimaDoLimite());        // Esperado: [31, 35, 32]

const emFahrenheit = reg.converterParaFahrenheit();
console.log(`28°C em °F: ${emFahrenheit[0]?.toFixed(2)}°F`);   // Esperado: 82.40°F

reg.alterarLimite(32);
console.log("Alertas (> 32°C):", reg.acimaDoLimite());        // Esperado: [35]

const regVazio = new RegistroTemperaturas();
console.log(`Registro Vazio -> Listar: "${regVazio.listar()}"`);
console.log("Alertas vazio:", regVazio.acimaDoLimite());              // Esperado: []
console.log("Fahrenheit vazio:", regVazio.converterParaFahrenheit()); // Esperado: []