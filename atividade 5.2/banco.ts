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

export class Banco {
    contas: Conta[] = [];
    clientes: Cliente[] = [];

    // ==========================================
    // MÉTODOS DE CLIENTE
    // ==========================================
    inserirCliente(cliente: Cliente): void {
        const existe = this.clientes.find(c => c.id === cliente.id || c.cpf === cliente.cpf);
        if (existe) {
            console.log(`Erro: Já existe um cliente com o ID ${cliente.id} ou CPF ${cliente.cpf}.`);
            return;
        }
        this.clientes.push(cliente);
    }

    consultarCliente(cpf: string): Cliente | undefined {
        return this.clientes.find(c => c.cpf === cpf);
    }

    // 2.f) Excluir cliente e desassociar as suas contas
    excluirCliente(cpf: string): void {
        const indice = this.clientes.findIndex(c => c.cpf === cpf);
        if (indice === -1) {
            console.log(`Erro: Cliente com CPF ${cpf} não encontrado.`);
            return;
        }

        const cliente = this.clientes[indice];
        for (const conta of cliente.contas) {
            conta.cliente = undefined;
        }
        cliente.contas = [];
        this.clientes.splice(indice, 1);
        console.log(`Cliente ${cliente.nome} excluído com sucesso. As suas contas ficaram sem titular.`);
    }

    associarContaCliente(numeroConta: string, cpfCliente: string): void {
        const cliente = this.consultarCliente(cpfCliente);
        const conta = this.consultar(numeroConta);

        if (!cliente) {
            console.log(`Erro: Cliente com CPF ${cpfCliente} não encontrado.`);
            return;
        }
        if (!conta) {
            console.log(`Erro: Conta ${numeroConta} não encontrada.`);
            return;
        }
        if (cliente.contas.some(c => c.numero === numeroConta)) {
            console.log(`Erro: A conta ${numeroConta} já está associada a este cliente.`);
            return;
        }
        if (conta.cliente !== undefined) {
            console.log(`Erro: A conta ${numeroConta} já pertence ao cliente ${conta.cliente.nome}.`);
            return;
        }

        conta.cliente = cliente;
        cliente.contas.push(conta);
    }

    listarContasCliente(cpf: string): Conta[] {
        const cliente = this.consultarCliente(cpf);
        if (!cliente) {
            console.log(`Erro: Cliente com CPF ${cpf} não encontrado.`);
            return [];
        }
        return cliente.contas;
    }

    totalizarSaldoCliente(cpf: string): number {
        return this.listarContasCliente(cpf).reduce((soma, c) => soma + c.saldo, 0);
    }

    // ==========================================
    // 1) MÉTODOS PRINCIPAIS DE CONTA
    // ==========================================
    inserir(conta: Conta): void {
        const existe = this.contas.find(c => c.id === conta.id || c.numero === conta.numero);
        if (existe) {
            console.log(`Erro: Já existe uma conta com o ID ${conta.id} ou número ${conta.numero}.`);
            return;
        }
        this.contas.push(conta);
    }

    consultar(numero: string): Conta | undefined {
        return this.contas.find(c => c.numero === numero);
    }

    private consultarPorIndice(numero: string): number {
        return this.contas.findIndex(c => c.numero === numero);
    }

    atualizar(contaAtualizada: Conta): void {
        const indice = this.consultarPorIndice(contaAtualizada.numero);
        if (indice !== -1) {
            this.contas[indice] = contaAtualizada;
        } else {
            console.log(`Erro: Conta ${contaAtualizada.numero} não encontrada.`);
        }
    }

    // 2.g) Excluir conta e remover referência no cliente titular
    excluir(numero: string): void {
        const indice = this.consultarPorIndice(numero);
        if (indice === -1) {
            console.log(`Erro: Conta ${numero} não encontrada.`);
            return;
        }

        const conta = this.contas[indice];
        if (conta.cliente) {
            conta.cliente.contas = conta.cliente.contas.filter(c => c.numero !== numero);
        }

        this.contas.splice(indice, 1);
        console.log(`Conta ${numero} excluída com sucesso.`);
    }

    sacar(numero: string, valor: number): void {
        const conta = this.consultar(numero);
        if (!conta) {
            console.log(`Erro: Conta ${numero} não encontrada.`);
            return;
        }
        if (!conta.sacar(valor)) {
            console.log(`Erro: Saldo insuficiente ou valor inválido na conta ${numero}.`);
        }
    }

    depositar(numero: string, valor: number): void {
        const conta = this.consultar(numero);
        if (!conta) {
            console.log(`Erro: Conta ${numero} não encontrada.`);
            return;
        }
        conta.depositar(valor);
    }

    transferir(numeroOrigem: string, numeroDestino: string, valor: number): void {
        const contaOrigem = this.consultar(numeroOrigem);
        const contaDestino = this.consultar(numeroDestino);

        if (!contaOrigem || !contaDestino) {
            console.log("Erro: Conta de origem ou de destino não encontrada.");
            return;
        }

        if (!contaOrigem.transferir(contaDestino, valor)) {
            console.log("Erro: Saldo insuficiente para realizar a transferência.");
        }
    }

    // ==========================================
    // 2) MÉTODOS ADICIONAIS
    // ==========================================

    // 2.a) Ordem bancária: transferir valor para várias contas de destino
    ordemBancaria(numeroOrigem: string, contasDestino: string[], valor: number): void {
        const contaOrigem = this.consultar(numeroOrigem);
        if (!contaOrigem) {
            console.log(`Erro: Conta de origem ${numeroOrigem} não encontrada.`);
            return;
        }

        const totalNecessario = valor * contasDestino.length;
        if (contaOrigem.saldo < totalNecessario) {
            console.log(`Erro: Saldo insuficiente para a ordem bancária (necessário: R$ ${totalNecessario.toFixed(2)}).`);
            return;
        }

        for (const numDestino of contasDestino) {
            this.transferir(numeroOrigem, numDestino, valor);
        }
    }

    // 2.b) Quantidade de contas
    quantidadeContas(): number {
        return this.contas.length;
    }

    // 2.c) Total de dinheiro depositado em todas as contas
    totalDinheiroDepositado(): number {
        return this.contas.reduce((total, conta) => total + conta.saldo, 0);
    }

    // 2.d) Média do saldo das contas chamando os dois métodos anteriores
    mediaSaldoContas(): number {
        const qtd = this.quantidadeContas();
        if (qtd === 0) return 0;
        return this.totalDinheiroDepositado() / qtd;
    }

    // 2.e) Mudança de titularidade de uma conta
    mudarTitularidade(numeroConta: string, novoCpf: string): void {
        const conta = this.consultar(numeroConta);
        const novoCliente = this.consultarCliente(novoCpf);

        if (!conta) {
            console.log(`Erro: Conta ${numeroConta} não encontrada.`);
            return;
        }
        if (!novoCliente) {
            console.log(`Erro: Cliente com CPF ${novoCpf} não encontrado.`);
            return;
        }

        // Remove da lista de contas do titular anterior, se existir
        if (conta.cliente) {
            conta.cliente.contas = conta.cliente.contas.filter(c => c.numero !== numeroConta);
        }

        conta.cliente = novoCliente;
        if (!novoCliente.contas.some(c => c.numero === numeroConta)) {
            novoCliente.contas.push(conta);
        }
        console.log(`Titularidade da conta ${numeroConta} transferida para ${novoCliente.nome}.`);
    }

    // 2.h) Listar contas sem cliente
    listarContasSemCliente(): Conta[] {
        return this.contas.filter(c => c.cliente === undefined);
    }

    // ==========================================
    // 4) CARREGAR DADOS INICIAIS
    // ==========================================
    carregarDados(): void {
        // 5 Clientes
        const cli1 = new Cliente(1, "Ana Silva", "111.111.111-11", new Date(1995, 2, 10));
        const cli2 = new Cliente(2, "Bruno Costa", "222.222.222-22", new Date(1990, 6, 25));
        const cli3 = new Cliente(3, "Carla Dias", "333.333.333-33", new Date(1998, 10, 5));
        const cli4 = new Cliente(4, "Daniel Alves", "444.444.444-44", new Date(1985, 0, 18));
        const cli5 = new Cliente(5, "Eduarda Lima", "555.555.555-55", new Date(2000, 8, 30));

        this.inserirCliente(cli1);
        this.inserirCliente(cli2);
        this.inserirCliente(cli3);
        this.inserirCliente(cli4);
        this.inserirCliente(cli5);

        // 5 Contas (3 associadas e 2 sem titular para testar a alínea 2.h)
        this.inserir(new Conta(1, "111-1", 1000));
        this.inserir(new Conta(2, "222-2", 2500));
        this.inserir(new Conta(3, "333-3", 500));
        this.inserir(new Conta(4, "444-4", 1800));
        this.inserir(new Conta(5, "555-5", 3200));

        this.associarContaCliente("111-1", "111.111.111-11");
        this.associarContaCliente("222-2", "222.222.222-22");
        this.associarContaCliente("333-3", "111.111.111-11");
    }
}