abstract class Pagamento {
    protected valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    abstract processar(): string;

}

class Cartao extends Pagamento {
    private ncartao: string;

    constructor(ncartao: string, valor: number) {
        super(valor);
        this.ncartao = ncartao;
    }

    private validarcartao(): boolean {
        const isValidLength = this.ncartao.length >= 13;
        const isNumeric = /^\d+$/.test(this.ncartao);
        return isValidLength && isNumeric;
    }

    public processar(): string {
        console.log(`--- Processando Pagamento com Cartão ---`);
        if (this.validarcartao()) {
            const ultimosDigitos = this.ncartao.slice(-4);
            return `✅ Cartão ****${ultimosDigitos} validado. Pagamento de R$${this.valor.toFixed(2)} processado com sucesso.`;
        } else {
            return `❌ Erro: Número de cartão inválido. Pagamento de R$${this.valor.toFixed(2)} falhou.`;
        }
    }
}

class Boleto extends Pagamento{

    private gerarCodigoBoleto(): string {
        const part1 = Math.floor(Math.random() * 90000) + 10000;
        const part2 = Math.floor(Math.random() * 90000) + 10000;
        const part3 = Math.floor(Math.random() * 90000) + 10000;
        const digit = Math.floor(Math.random() * 9);
        const value = (this.valor * 100).toFixed(0).padStart(10, '0');

        return `${part1}.xxxxx ${part2}.xxxxxx ${part3}.xxxxxx ${digit} ${value}`;
    }

    public processar(): string {
        console.log(`--- Processando Pagamento com Boleto ---`);
        const codigo = this.gerarCodigoBoleto();
        return `💰 Boleto gerado com sucesso para R$${this.valor.toFixed(2)}. \n Código do Boleto: ${codigo} \n📄 Prazo de pagamento: 3 dias úteis.`;
    }
}

function processarTransacao(formaPagamento: Pagamento): void {
    const resultado = formaPagamento.processar();
    console.log(resultado);
}

const pagamentoCartaoOk = new Cartao("1234567890123456", 150.75);
const pagamentoCartaoErro = new Cartao("12345", 50.00); // Número curto para falhar a validação
const pagamentoBoleto = new Boleto(89.90);

// 2. Processamento dos pagamentos usando a função polimórfica

console.log("\n----- Transação 1: Pagamento Válido com Cartão -----");
processarTransacao(pagamentoCartaoOk);

console.log("\n----- Transação 2: Pagamento com Boleto -----");
processarTransacao(pagamentoBoleto);

console.log("\n----- Transação 3: Pagamento com Cartão Inválido -----");
processarTransacao(pagamentoCartaoErro);