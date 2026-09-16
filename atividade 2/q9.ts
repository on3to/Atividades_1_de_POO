function sortearNome(nomes: string[]): string {
    const indice = Math.floor(Math.random() * nomes.length);
    return nomes[indice]!;
}

const participantes = ["Ana", "Bruno", "Carlos"];

console.log(sortearNome(participantes));