class Triangulo {
    a: number;
    b: number;
    c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    ehTriangulo(): boolean {
        return Math.abs(this.b - this.c) < this.a && this.a < (this.b + this.c);
    }

    ehIsosceles(): boolean {
        if (!this.ehTriangulo()) return false;
        return this.a === this.b || this.a === this.c || this.b === this.c;
    }

    ehEquilatero(): boolean {
        if (!this.ehTriangulo()) return false;
        return this.a === this.b && this.b === this.c;
    }

    ehEscaleno(): boolean {
        if (!this.ehTriangulo()) return false;
        return this.a !== this.b && this.a !== this.c && this.b !== this.c;
    }
}

let t1 = new Triangulo(3, 4, 5);
let t2 = new Triangulo(2, 2, 2);
console.log(t1.ehEscaleno()); 
console.log(t2.ehEquilatero());