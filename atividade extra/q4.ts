class ColecaoNumeros {
  private numeros: number[];

  constructor() {
    this.numeros = [];
  }

  adicionar(numero: number): void {
    this.numeros.push(numero);
  }

  limpar(): void {
    this.numeros = [];
  }

  quantidade(): number {
    return this.numeros.length;
  }

  somar(): number {
    return this.numeros.reduce((acc, curr) => acc + curr, 0);
  }

  calcularMedia(): number {
    const qtd = this.quantidade();
    if (qtd === 0) {
      return 0;
    }
    return this.somar() / qtd;
  }

  maior(): number | undefined {
    if (this.quantidade() === 0) {
      return undefined;
    }
    return Math.max(...this.numeros);
  }

  menor(): number | undefined {
    if (this.quantidade() === 0) {
      return undefined;
    }
    return Math.min(...this.numeros);
  }
}

// --- TESTES ---
console.log("\n=== Teste ColecaoNumeros ===");
const col = new ColecaoNumeros();

col.adicionar(10);
col.adicionar(20);
col.adicionar(30);

console.log(`Quantidade: ${col.quantidade()}`);    // Esperado: 3
console.log(`Soma: ${col.somar()}`);                // Esperado: 60
console.log(`Média: ${col.calcularMedia()}`);       // Esperado: 20
console.log(`Maior: ${col.maior()}`);               // Esperado: 30
console.log(`Menor: ${col.menor()}`);               // Esperado: 10

col.limpar();
col.adicionar(-8);
col.adicionar(-3);
col.adicionar(-12);

console.log(`Após redefinir -> Maior: ${col.maior()} | Menor: ${col.menor()}`); // Esperados: -3 e -12

col.limpar();
console.log(`Array vazio -> Qtd: ${col.quantidade()}, Soma: ${col.somar()}, Média: ${col.calcularMedia()}, Maior: ${col.maior()}, Menor: ${col.menor()}`);