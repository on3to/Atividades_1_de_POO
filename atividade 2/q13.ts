class TradutorEmojis {
    dicionario: { [palavra: string]: string } = {
        "amor": "❤️",
        "futebol": "⚽",
        "cachorro": "🐶",
        "gato": "🐱",
        "casa": "🏠",
        "carro": "🚗",
        "comida": "🍔",
        "feliz": "😀"
    };

    traduzir(frase: string): string {
        const palavras = frase.split(" ");

        const traduzidas = palavras.map((palavra) => {
            const palavraMinuscula = palavra.toLowerCase();

            if (this.dicionario[palavraMinuscula]) {
                return this.dicionario[palavraMinuscula];
            }

            return palavra;
        });

        return traduzidas.join(" ");
    }
}

const tradutor = new TradutorEmojis();

console.log(tradutor.traduzir("O amor do brasileiro é o futebol"));