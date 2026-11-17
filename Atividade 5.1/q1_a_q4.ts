// 1)CLIENTE

export class Cliente {
    id: number;
    nome: string;
    cpf: string;
    dataNascimento: Date;
    contas: Conta[];

    constructor(id: number, nome: string, cpf: string, dataNascimento: Date) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.contas = [];
    }
}


// 2)CONTA

export class Conta {
    id: number;
    numero: string;
    saldo: number;
    cliente?: Cliente;
    dataDeAbertura: Date;

    constructor(id: number, numero: string, saldoInicial: number = 0, dataDeAbertura: Date = new Date()) {
        this.id = id;
        this.numero = numero;
        this.saldo = saldoInicial;
        this.dataDeAbertura = dataDeAbertura;
    }

    sacar(valor: number): boolean {
        if (valor > 0 && this.saldo >= valor) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }

    depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
        }
    }

    transferir(contaDestino: Conta, valor: number): boolean {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    }
}

// 3) BANCO E 4) NEGÓCIO

export class Banco {
    contas: Conta[] = [];
    clientes: Cliente[] = [];

    // a) e f) Incluir cliente impedindo duplicidade de id ou cpf
    inserirCliente(cliente: Cliente): void {
        const clienteExistente = this.clientes.find(
            c => c.id === cliente.id || c.cpf === cliente.cpf
        );

        if (clienteExistente) {
            console.log(`Erro: Já existe um cliente cadastrado com o ID ${cliente.id} ou CPF ${cliente.cpf}.`);
            return;
        }

        this.clientes.push(cliente);
    }

    // b) Consultar cliente pelo CPF
    consultarCliente(cpf: string): Cliente | undefined {
        return this.clientes.find(c => c.cpf === cpf);
    }

    // Método auxiliar para consultar conta pelo número
    consultarConta(numero: string): Conta | undefined {
        return this.contas.find(c => c.numero === numero);
    }

    // g) Incluir conta impedindo duplicidade de id ou número
    inserirConta(conta: Conta): void {
        const contaExistente = this.contas.find(
            c => c.id === conta.id || c.numero === conta.numero
        );

        if (contaExistente) {
            console.log(`Erro: Já existe uma conta cadastrada com o ID ${conta.id} ou número ${conta.numero}.`);
            return;
        }

        this.contas.push(conta);
    }

    // c) Associar cliente a uma conta respeitando as regras 4.a e 4.b
    associarContaCliente(numeroConta: string, cpfCliente: string): void {
        const cliente = this.consultarCliente(cpfCliente);
        const conta = this.consultarConta(numeroConta);

        if (!cliente) {
            console.log(`Erro: Cliente com CPF ${cpfCliente} não encontrado.`);
            return;
        }

        if (!conta) {
            console.log(`Erro: Conta número ${numeroConta} não encontrada.`);
            return;
        }

        // Regra 4.a: A mesma conta não pode ser associada mais de uma vez ao mesmo cliente
        const jaAssociadaAoCliente = cliente.contas.some(c => c.numero === numeroConta);
        if (jaAssociadaAoCliente) {
            console.log(`Erro: A conta ${numeroConta} já está associada ao cliente ${cliente.nome}.`);
            return;
        }

        // Regra 4.b: Cada conta só pode ser associada a um único cliente
        if (conta.cliente !== undefined) {
            console.log(`Erro: A conta ${numeroConta} já pertence a outro titular (${conta.cliente.nome}).`);
            return;
        }

        // Realiza a associação bidirecional
        conta.cliente = cliente;
        cliente.contas.push(conta);
    }

    // d) Listar contas de um cliente
    listarContasCliente(cpf: string): Conta[] {
        const cliente = this.consultarCliente(cpf);
        if (!cliente) {
            console.log(`Erro: Cliente com CPF ${cpf} não encontrado.`);
            return [];
        }
        return cliente.contas;
    }

    // e) Totalizar saldo por cliente
    totalizarSaldoCliente(cpf: string): number {
        const contasCliente = this.listarContasCliente(cpf);
        return contasCliente.reduce((total, conta) => total + conta.saldo, 0);
    }
}
