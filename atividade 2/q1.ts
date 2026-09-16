function saudacao(nome: string, pronome: string = "Sr"): void {
    console.log(`${pronome}. ${nome}`);
}

saudacao("Neto");
saudacao("Sávia", "Sra");