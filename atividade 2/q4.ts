function exibir(...strings: string[]): void {
    strings.forEach((texto) => {
        console.log(texto);
    });
}

exibir("a", "b");
exibir("a", "b", "c");
exibir("a", "b", "c", "d");