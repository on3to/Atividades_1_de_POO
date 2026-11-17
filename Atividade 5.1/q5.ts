import { Banco, Cliente, Conta } from "./q1_a_q4";


const banco = new Banco();

// Cadastros base válidos
const c1 = new Cliente(1, "Ana Silva", "111.111.111-11", new Date(1998, 4, 15));
const c2 = new Cliente(2, "Carlos Souza", "222.222.222-22", new Date(2001, 8, 22));
banco.inserirCliente(c1);
banco.inserirCliente(c2);

const conta1 = new Conta(101, "0001-1", 500);
const conta2 = new Conta(102, "0002-2", 1250);
banco.inserirConta(conta1);
banco.inserirConta(conta2);

console.log("=== TESTES DE ERRO: CLIENTES ===");
// Erro 1: Cliente com mesmo ID[cite: 2, 3]
banco.inserirCliente(new Cliente(1, "Outro Nome", "333.333.333-33", new Date()));

// Erro 2: Cliente com mesmo CPF[cite: 2, 3]
banco.inserirCliente(new Cliente(3, "Ana Clone", "111.111.111-11", new Date()));

// Erro 3: Consultar CPF inexistente
console.log("Consulta CPF inexistente:", banco.consultarCliente("999.999.999-99")); // undefined

console.log("\n=== TESTES DE ERRO: CONTAS ===");
// Erro 4: Conta com mesmo ID[cite: 2, 3]
banco.inserirConta(new Conta(101, "8888-8", 100));

// Erro 5: Conta com mesmo número[cite: 2, 3]
banco.inserirConta(new Conta(105, "0001-1", 100));

console.log("\n=== TESTES DE ERRO: ASSOCIAÇÃO E CONSULTAS ===");
// Associação válida inicial
banco.associarContaCliente("0001-1", "111.111.111-11");

// Erro 6: Associar conta inexistente
banco.associarContaCliente("9999-9", "111.111.111-11");

// Erro 7: Associar a cliente inexistente
banco.associarContaCliente("0002-2", "999.999.999-99");

// Erro 8: Associar a mesma conta mais de uma vez ao mesmo cliente (Regra 4.a)[cite: 2, 3]
banco.associarContaCliente("0001-1", "111.111.111-11");

// Erro 9: Associar conta que já pertence a outro cliente (Regra 4.b)[cite: 3]
banco.associarContaCliente("0001-1", "222.222.222-22");

// Erro 10: Listar contas e totalizar saldo de CPF inexistente
console.log("Contas CPF inválido:", banco.listarContasCliente("000.000.000-00")); // []
console.log("Saldo CPF inválido:", banco.totalizarSaldoCliente("000.000.000-00")); // 0