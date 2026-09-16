"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Questão 2
let idade = 2;
console.log("Idade:", idade);
// Questão 3
let nome = "Ely";
console.log("Tipo de nome:", typeof nome);
// Questão 4
let a = 10;
let b = "5";
console.log(a + b);
let x = true;
let y = 2;
console.log(x + y);
console.log(0 == false);
console.log("" == false);
console.log(null == undefined);
// Questão 6
let nomePessoa = "Ely";
let salario = 2000;
let linguagem = "TypeScript";
console.log(`${nomePessoa}
My salary is ${salario.toFixed(2)}
and
my preffered language is ${linguagem}`);
// Questão 7
let mensagem = "TypeScript É MUITO LEGAL!";
console.log(mensagem.toUpperCase());
console.log(mensagem.length);
let pi = 3.1415;
console.log(pi.toFixed(2));
// Questão 8
class Retangulo {
    largura;
    altura;
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }
    calcularArea() {
        return this.largura * this.altura;
    }
    calcularPerimetro() {
        return 2 * (this.largura + this.altura);
    }
}
let retangulo = new Retangulo(10, 5);
console.log("Área do retângulo:", retangulo.calcularArea());
console.log("Perímetro do retângulo:", retangulo.calcularPerimetro());
// Questão 9
class Circulo {
    raio;
    constructor(raio) {
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * this.raio ** 2;
    }
    calcularPerimetro() {
        return 2 * Math.PI * this.raio;
    }
}
let circulo = new Circulo(5);
console.log("Área do círculo:", circulo.calcularArea().toFixed(2));
console.log("Perímetro do círculo:", circulo.calcularPerimetro().toFixed(2));
// Questão 10
class SituacaoFinanceira {
    valorCreditos;
    valorDebitos;
    constructor(valorCreditos, valorDebitos) {
        this.valorCreditos = valorCreditos;
        this.valorDebitos = valorDebitos;
    }
    calcularSaldo() {
        return this.valorCreditos - this.valorDebitos;
    }
}
let situacao = new SituacaoFinanceira(5000, 2000);
console.log("Saldo:", situacao.calcularSaldo());
// Questão 11
class Pessoa {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        return `Meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}
let pessoa = new Pessoa("Ely", 46);
console.log(pessoa.apresentar());
// Questão 12
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
// Questão 13
class Numero {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
    ehPar() {
        return this.valor % 2 == 0;
    }
    ehImpar() {
        return !this.ehPar();
    }
}
let numero1 = new Numero(10);
let numero2 = new Numero(7);
console.log("10 é par?", numero1.ehPar());
console.log("10 é ímpar?", numero1.ehImpar());
console.log("7 é par?", numero2.ehPar());
console.log("7 é ímpar?", numero2.ehImpar());
//# sourceMappingURL=script.js.map