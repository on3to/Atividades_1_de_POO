import prompt from "prompt-sync";
import { Banco, Cliente, Conta } from "./banco";

class App {
    private banco: Banco;
    private input: prompt.Prompt;
    private proximoIdConta: number = 6;
    private proximoIdCliente: number = 6;

    constructor() {
        this.banco = new Banco();
        this.input = prompt();
    }

    carregarDadosIniciais(): void {
        this.banco.carregarDados();
    }

    menu(): void {
        let opcao: string = "";

        do {
            console.log("\n==========================================");
            console.log("Bem-vindo ao Sistema Bancário");
            console.log("Contas:");
            console.log("  01 - Inserir          02 - Consultar");
            console.log("  03 - Sacar            04 - Depositar");
            console.log("  05 - Excluir          06 - Transferir");
            console.log("  07 - Totalizações     08 - Ordem Bancária");
            console.log("  09 - Mudar Titular    10 - Contas sem Cliente");
            console.log("Clientes:");
            console.log("  20 - Inserir          21 - Consultar");
            console.log("  22 - Associar         23 - Excluir");
            console.log("  24 - Listar Contas    25 - Totalizar Saldo");
            console.log("0 - Sair");
            console.log("==========================================");

            opcao = this.input("Opção: ");

            switch (opcao) {
                case "01":
                    this.inserirConta();
                    break;
                case "02":
                    this.consultarConta();
                    break;
                case "03":
                    this.sacar();
                    break;
                case "04":
                    this.depositar();
                    break;
                case "05":
                    this.excluirConta();
                    break;
                case "06":
                    this.transferir();
                    break;
                case "07":
                    this.totalizacoes();
                    break;
                case "08":
                    this.ordemBancaria();
                    break;
                case "09":
                    this.mudarTitularidade();
                    break;
                case "10":
                    this.listarContasSemCliente();
                    break;
                case "20":
                    this.inserirCliente();
                    break;
                case "21":
                    this.consultarCliente();
                    break;
                case "22":
                    this.associarContaCliente();
                    break;
                case "23":
                    this.excluirCliente();
                    break;
                case "24":
                    this.listarContasCliente();
                    break;
                case "25":
                    this.totalizarSaldoCliente();
                    break;
                case "0":
                    break;
                default:
                    console.log("Opção inválida!");
            }

            if (opcao !== "0") {
                this.input("\nOperação finalizada. Prima <Enter> para continuar...");
            }
        } while (opcao !== "0");

        console.log("Aplicação encerrada.");
    }

    // --- Métodos de Conta (01 a 10) ---

    private inserirConta(): void {
        console.log("\n--- Cadastrar Conta ---");
        const numero = this.input("Digite o número da conta: ");
        const saldoInicial = Number(this.input("Digite o saldo inicial: "));
        const conta = new Conta(this.proximoIdConta++, numero, saldoInicial);
        this.banco.inserir(conta);
    }

    private consultarConta(): void {
        console.log("\n--- Consultar Conta ---");
        const numero = this.input("Digite o número da conta: ");
        const conta = this.banco.consultar(numero);
        if (conta) {
            const titular = conta.cliente ? conta.cliente.nome : "Sem titular";
            console.log(`Conta: ${conta.numero} | Saldo: R$ ${conta.saldo.toFixed(2)} | Titular: ${titular}`);
        } else {
            console.log("Conta não encontrada.");
        }
    }

    private sacar(): void {
        console.log("\n--- Sacar ---");
        const numero = this.input("Número da conta: ");
        const valor = Number(this.input("Valor do saque: "));
        this.banco.sacar(numero, valor);
    }

    private depositar(): void {
        console.log("\n--- Depositar ---");
        const numero = this.input("Número da conta: ");
        const valor = Number(this.input("Valor do depósito: "));
        this.banco.depositar(numero, valor);
    }

    private excluirConta(): void {
        console.log("\n--- Excluir Conta ---");
        const numero = this.input("Número da conta a excluir: ");
        this.banco.excluir(numero);
    }

    private transferir(): void {
        console.log("\n--- Transferir ---");
        const origem = this.input("Conta de origem: ");
        const destino = this.input("Conta de destino: ");
        const valor = Number(this.input("Valor a transferir: "));
        this.banco.transferir(origem, destino, valor);
    }

    private totalizacoes(): void {
        console.log("\n--- Totalizações do Banco ---");
        console.log(`Quantidade de contas: ${this.banco.quantidadeContas()}`);
        console.log(`Total depositado: R$ ${this.banco.totalDinheiroDepositado().toFixed(2)}`);
        console.log(`Média de saldo por conta: R$ ${this.banco.mediaSaldoContas().toFixed(2)}`);
    }

    private ordemBancaria(): void {
        console.log("\n--- Ordem Bancária ---");
        const origem = this.input("Conta de origem: ");
        const destinosTexto = this.input("Contas de destino (separadas por vírgula, ex: 222-2,333-3): ");
        const contasDestino = destinosTexto.split(",").map(c => c.trim());
        const valor = Number(this.input("Valor para cada conta: "));
        this.banco.ordemBancaria(origem, contasDestino, valor);
    }

    private mudarTitularidade(): void {
        console.log("\n--- Mudar Titularidade ---");
        const numeroConta = this.input("Número da conta: ");
        const novoCpf = this.input("CPF do novo titular: ");
        this.banco.mudarTitularidade(numeroConta, novoCpf);
    }

    // Alínea 2.h: Lista contas sem cliente e permite associar logo em seguida
    private listarContasSemCliente(): void {
        console.log("\n--- Contas Sem Titular ---");
        const contasSemCliente = this.banco.listarContasSemCliente();

        if (contasSemCliente.length === 0) {
            console.log("Todas as contas possuem titular.");
            return;
        }

        for (const c of contasSemCliente) {
            console.log(`- Conta: ${c.numero} | Saldo: R$ ${c.saldo.toFixed(2)}`);
        }

        const resposta = this.input("\nDeseja atribuir titularidade a uma destas contas agora? (s/n): ");
        if (resposta.toLowerCase() === "s") {
            const numeroConta = this.input("Número da conta: ");
            const cpfCliente = this.input("CPF do cliente: ");
            this.banco.associarContaCliente(numeroConta, cpfCliente);
        }
    }

    // --- Métodos de Cliente (20 a 25) ---

    private inserirCliente(): void {
        console.log("\n--- Cadastrar Cliente ---");
        const nome = this.input("Nome completo: ");
        const cpf = this.input("CPF: ");
        const dataNascTexto = this.input("Data de nascimento (AAAA-MM-DD): ");
        const cliente = new Cliente(this.proximoIdCliente++, nome, cpf, new Date(dataNascTexto));
        this.banco.inserirCliente(cliente);
    }

    private consultarCliente(): void {
        console.log("\n--- Consultar Cliente ---");
        const cpf = this.input("CPF do cliente: ");
        const cliente = this.banco.consultarCliente(cpf);
        if (cliente) {
            console.log(`ID: ${cliente.id} | Nome: ${cliente.nome} | CPF: ${cliente.cpf} | Qtd. Contas: ${cliente.contas.length}`);
        } else {
            console.log("Cliente não encontrado.");
        }
    }

    private associarContaCliente(): void {
        console.log("\n--- Associar Conta a Cliente ---");
        const numeroConta = this.input("Número da conta: ");
        const cpfCliente = this.input("CPF do cliente: ");
        this.banco.associarContaCliente(numeroConta, cpfCliente);
    }

    private excluirCliente(): void {
        console.log("\n--- Excluir Cliente ---");
        const cpf = this.input("CPF do cliente a excluir: ");
        this.banco.excluirCliente(cpf);
    }

    private listarContasCliente(): void {
        console.log("\n--- Listar Contas do Cliente ---");
        const cpf = this.input("CPF do cliente: ");
        const contas = this.banco.listarContasCliente(cpf);
        if (contas.length > 0) {
            contas.forEach(c => console.log(`- Conta ${c.numero}: R$ ${c.saldo.toFixed(2)}`));
        } else {
            console.log("Nenhuma conta encontrada para este cliente.");
        }
    }

    private totalizarSaldoCliente(): void {
        console.log("\n--- Totalizar Saldo do Cliente ---");
        const cpf = this.input("CPF do cliente: ");
        const total = this.banco.totalizarSaldoCliente(cpf);
        console.log(`Saldo total consolidado: R$ ${total.toFixed(2)}`);
    }
}

// Instanciação, carga inicial e execução do menu
const app = new App();
app.carregarDadosIniciais();
app.menu();