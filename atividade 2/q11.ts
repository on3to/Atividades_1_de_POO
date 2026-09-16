class Sorteio {
    participantes: string[] = [];

    // A
    adicionar(nome: string): void {
        this.participantes.push(nome);
    }

    // B
    sortear(): string {
        const indice = Math.floor(Math.random() * this.participantes.length);
        return this.participantes[indice]!;
    }
}

const sorteio = new Sorteio();

sorteio.adicionar("Ana");
sorteio.adicionar("Bruno");
sorteio.adicionar("Carlos");

console.log(sorteio.sortear());