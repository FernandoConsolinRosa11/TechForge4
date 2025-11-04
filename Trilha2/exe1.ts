class ContaBancaria {
    private titular: string;
    private saldo: number;

    constructor(titular: string, saldoInicial: number = 0) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    public depositar(valor: number): void {
        if (valor <= 0) {
            console.log("Erro: O valor do depósito deve ser positivo.");
            return;
        }
        
        this.saldo += valor;
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso!`);
        console.log(`Novo saldo: R$ ${this.saldo.toFixed(2)}`);
    }

    public sacar(valor: number): void {
        if (valor <= 0) {
            console.log("Erro: O valor do saque deve ser positivo.");
            return;
        }

        if (valor > this.saldo) {
            console.log("Erro: Saldo insuficiente para realizar o saque.");
            console.log(`Saldo disponível: R$ ${this.saldo.toFixed(2)}`);
            return;
        }

        this.saldo -= valor;
        console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso!`);
        console.log(`Novo saldo: R$ ${this.saldo.toFixed(2)}`);
    }

    public consultarSaldo(): number {
        console.log(`Saldo atual: R$ ${this.saldo.toFixed(2)}`);
        return this.saldo;
    }


    public getTitular(): string {
        return this.titular;
    }

    public exibirInformacoes(): void {
        console.log("=== Informações da Conta ===");
        console.log(`Titular: ${this.titular}`);
        console.log(`Saldo: R$ ${this.saldo.toFixed(2)}`);
        console.log("===========================");
    }
}


const minhaConta = new ContaBancaria("João Silva", 1000);

minhaConta.exibirInformacoes();

minhaConta.depositar(500);

minhaConta.sacar(300);

minhaConta.sacar(2000);


minhaConta.depositar(-50);

minhaConta.consultarSaldo();


minhaConta.exibirInformacoes();