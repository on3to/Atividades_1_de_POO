class Impressora {
  private paginas: number;
  private colorida: boolean;
  private totalPaginasImpressas: number;
  private valorTotalImpresso: number;

  constructor() {
    this.paginas = 0;
    this.colorida = false;
    this.totalPaginasImpressas = 0;
    this.valorTotalImpresso = 0;
  }

  inicializarPedido(paginas: number, colorida: boolean): void {
    if (paginas >= 0) {
      this.paginas = Math.floor(paginas);
      this.colorida = colorida;
    }
  }

  calcularValor(): number {
    const precoPorPagina = this.colorida ? 0.80 : 0.25;
    return this.paginas * precoPorPagina;
  }

  imprimir(): void {
    const valorPedido = this.calcularValor();
    this.totalPaginasImpressas += this.paginas;
    this.valorTotalImpresso += valorPedido;
  }

  getTotalPaginasImpressas(): number {
    return this.totalPaginasImpressas;
  }

  getValorTotalImpresso(): number {
    return this.valorTotalImpresso;
  }
}

// --- TESTES ---
console.log("\n=== Teste Impressora ===");
const imp1 = new Impressora();

// Pedido 1: 10 páginas PB
imp1.inicializarPedido(10, false);
imp1.imprimir();

// Pedido 2: 10 páginas Coloridas
imp1.inicializarPedido(10, true);
imp1.imprimir();

console.log(`Total de Páginas: ${imp1.getTotalPaginasImpressas()}`); // Esperado: 20
console.log(`Valor Total Impresso: R$ ${imp1.getValorTotalImpresso().toFixed(2)}`); // Esperado: R$ 10.50

// Pedido 3: apenas calcularValor() sem imprimir (10 coloridas = 10 * 0.80)
console.log(`Valor calculado (sem imprimir): R$ ${imp1.calcularValor().toFixed(2)}`); // Esperado: R$ 8.00
console.log(`Totais após calcularValor: ${imp1.getTotalPaginasImpressas()} pgs | R$ ${imp1.getValorTotalImpresso().toFixed(2)}`);

const imp2 = new Impressora();
console.log(`Nova impressora - Páginas: ${imp2.getTotalPaginasImpressas()} | Valor: R$ ${imp2.getValorTotalImpresso().toFixed(2)}`); // Esperado: 0 e R$ 0.00