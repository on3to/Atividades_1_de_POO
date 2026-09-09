class Produto {
    nome: string;
    preco: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }

    aplicarDesconto(percentual: number): number {
        return this.preco - (this.preco * percentual / 100);
    }

    emitirOrcamento(percentual: number): string {
        let novoPreco = this.aplicarDesconto(percentual);

        let precoFormatado = this.preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

        let novoPrecoFormatado = novoPreco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

        return `Produto: ${this.nome}, Preço: ${precoFormatado}
Desconto: ${percentual}% → Novo preço: ${novoPrecoFormatado}`;
    }
}

let produto = new Produto("Camisa", 100);

console.log(produto.emitirOrcamento(10));