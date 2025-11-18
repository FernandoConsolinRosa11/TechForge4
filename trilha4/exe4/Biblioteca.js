var Biblioteca = /** @class */ (function () {
    function Biblioteca(LivrosIniciais) {
        if (LivrosIniciais === void 0) { LivrosIniciais = []; }
        this.acervo = [];
        this.acervo = LivrosIniciais;
    }
    Biblioteca.prototype.adicionarLivro = function (livro) {
        this.acervo.push(livro);
        console.log("Livro \"".concat(livro.titulo, "\" adicionado ao acervo."));
    };
    Biblioteca.prototype.buscarLivrosDisponiveis = function () {
        return this.acervo.filter(function (livro) { return livro.disponivel; });
    };
    return Biblioteca;
}());
var l1 = { titulo: "A Arte da Guerra", autor: "Sun Tzu", disponivel: true };
var l2 = { titulo: "Dom Casmurro", autor: "Machado de Assis", disponivel: false };
var l3 = { titulo: "Sapiens", autor: "Yuval Noah Harari", disponivel: true };
var l4 = { titulo: "1984", autor: "George Orwell", disponivel: false };
var minhaBiblioteca = new Biblioteca([l1, l2]);
minhaBiblioteca.adicionarLivro(l3);
minhaBiblioteca.adicionarLivro(l4);
