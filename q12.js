"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    nome;
    preco;
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    aplicarDesconto(percentual) {
        return this.preco - (this.preco * percentual / 100);
    }
    emitirOrcamento(percentual) {
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
//# sourceMappingURL=q12.js.map