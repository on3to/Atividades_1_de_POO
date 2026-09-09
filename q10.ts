class Circulo {
    raio: number;

    constructor(raio: number) {
        this.raio = raio;
    }

    calcularArea(): number {
        return Math.PI * this.raio ** 2;
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.raio;
    }
}

let circulo = new Circulo(5);

console.log("Área:", circulo.calcularArea().toFixed(2));
console.log("Perímetro:", circulo.calcularPerimetro().toFixed(2));