var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pagamento = /** @class */ (function () {
    function Pagamento(valor) {
        this.valor = valor;
    }
    return Pagamento;
}());
var Cartao = /** @class */ (function (_super) {
    __extends(Cartao, _super);
    function Cartao(ncartao, valor) {
        var _this = _super.call(this, valor) || this;
        _this.ncartao = ncartao;
        return _this;
    }
    Cartao.prototype.validarcartao = function () {
        var isValidLength = this.ncartao.length >= 13;
        var isNumeric = /^\d+$/.test(this.ncartao);
        return isValidLength && isNumeric;
    };
    Cartao.prototype.processar = function () {
        console.log("--- Processando Pagamento com Cart\u00E3o ---");
        if (this.validarcartao()) {
            var ultimosDigitos = this.ncartao.slice(-4);
            return "\u2705 Cart\u00E3o ****".concat(ultimosDigitos, " validado. Pagamento de R$").concat(this.valor.toFixed(2), " processado com sucesso.");
        }
        else {
            return "\u274C Erro: N\u00FAmero de cart\u00E3o inv\u00E1lido. Pagamento de R$".concat(this.valor.toFixed(2), " falhou.");
        }
    };
    return Cartao;
}(Pagamento));
var Boleto = /** @class */ (function (_super) {
    __extends(Boleto, _super);
    function Boleto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Boleto.prototype.gerarCodigoBoleto = function () {
        var part1 = Math.floor(Math.random() * 90000) + 10000;
        var part2 = Math.floor(Math.random() * 90000) + 10000;
        var part3 = Math.floor(Math.random() * 90000) + 10000;
        var digit = Math.floor(Math.random() * 9);
        var value = (this.valor * 100).toFixed(0).padStart(10, '0');
        return "".concat(part1, ".xxxxx ").concat(part2, ".xxxxxx ").concat(part3, ".xxxxxx ").concat(digit, " ").concat(value);
    };
    Boleto.prototype.processar = function () {
        console.log("--- Processando Pagamento com Boleto ---");
        var codigo = this.gerarCodigoBoleto();
        return "\uD83D\uDCB0 Boleto gerado com sucesso para R$".concat(this.valor.toFixed(2), ". \n C\u00F3digo do Boleto: ").concat(codigo, " \n\uD83D\uDCC4 Prazo de pagamento: 3 dias \u00FAteis.");
    };
    return Boleto;
}(Pagamento));
function processarTransacao(formaPagamento) {
    var resultado = formaPagamento.processar();
    console.log(resultado);
}
var pagamentoCartaoOk = new Cartao("1234567890123456", 150.75);
var pagamentoCartaoErro = new Cartao("12345", 50.00); // Número curto para falhar a validação
var pagamentoBoleto = new Boleto(89.90);
// 2. Processamento dos pagamentos usando a função polimórfica
console.log("\n----- Transação 1: Pagamento Válido com Cartão -----");
processarTransacao(pagamentoCartaoOk);
console.log("\n----- Transação 2: Pagamento com Boleto -----");
processarTransacao(pagamentoBoleto);
console.log("\n----- Transação 3: Pagamento com Cartão Inválido -----");
processarTransacao(pagamentoCartaoErro);
