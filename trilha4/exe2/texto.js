var Texto = /** @class */ (function () {
    function Texto(titulo, conteudo) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }
    Texto.prototype.exibirDocumento = function () {
        return "Titulo: ".concat(this.titulo, ", Conte\u00FAdo: ").concat(this.conteudo, ".");
    };
    return Texto;
}());
var meuDocumento = new Texto("Relatório Anual", "Os resultados financeiros superaram as expectativas no último trimestre.");
var saidaFormatada = meuDocumento.exibirDocumento();
console.log(saidaFormatada);
