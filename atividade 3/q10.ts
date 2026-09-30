class Jogador {
    forca: number;
    nivel: number;
    pontos: number;

    constructor(forca: number, nivel: number, pontos: number) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontos = pontos;
    }

    calcularAtaque(): number {
        return this.forca * this.nivel;
    }

    estaVivo(): boolean {
        return this.pontos > 0;
    }

    atacar(atacado: Jogador): void {
        if (atacado.estaVivo()) {
            atacado.pontos -= this.calcularAtaque();
        }
    }
}

// Avaliação com testes
let jogador1 = new Jogador(15, 3, 100);
let jogador2 = new Jogador(10, 4, 100);

jogador1.atacar(jogador2); 
jogador2.atacar(jogador1);

console.log("Pontos do Jogador 1:", jogador1.pontos);
console.log("Pontos do Jogador 2:", jogador2.pontos);

if (jogador1.pontos > jogador2.pontos) {
    console.log("Jogador 1 tem mais pontos.");
} else if (jogador2.pontos > jogador1.pontos) {
    console.log("Jogador 2 tem mais pontos.");
} else {
    console.log("Os jogadores têm a mesma quantidade de pontos.");
}