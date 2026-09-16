function separarNumeros(numeros: number[]): string {
    let resultado = "";

    numeros.forEach((numero, indice) => {
        if (indice > 0) {
            resultado += "-";
        }

        resultado += numero;
    });

    return resultado;
}

const numeros = [10, 20, 30, 40];

console.log(separarNumeros(numeros));