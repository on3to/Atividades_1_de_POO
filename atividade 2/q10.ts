class Autenticacao {
    usuario: string;
    senha: string;

    constructor(usuario: string, senha: string) {
        this.usuario = usuario;
        this.senha = senha;
    }

    validar(): boolean {
        return this.usuario === "admin" && this.senha === "1234";
    }
}

const autenticacao = new Autenticacao("admin", "1234");

console.log(autenticacao.validar());