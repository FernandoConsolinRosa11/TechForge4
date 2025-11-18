var Gestão = /** @class */ (function () {
    function Gestão(livrosInit) {
        if (livrosInit === void 0) { livrosInit = []; }
        this.acervo = livrosInit;
    }
    /*Functions*/
    Gestão.prototype.adicionarLivro = function (livro) {
        this.acervo.push(livro);
    };
    Gestão.prototype.filtrarPorGenero = function (genero) {
        var generoNormalizado = genero.toLowerCase();
        return this.acervo.filter(function (livro) {
            return livro.genero.toLowerCase() === generoNormalizado;
        });
    };
    Gestão.prototype.buscarPorAutor = function (autor) {
        var autorNormalizado = autor.toLowerCase();
        return this.acervo.filter(function (livro) {
            return livro.autor.toLowerCase() === autorNormalizado;
        });
    };
    Gestão.prototype.obterLivrosDisponiveisOrdenados = function () {
        var disponiveis = this.acervo.filter(function (livro) {
            return livro.disponivel;
        });
        return disponiveis.slice().sort(function (a, b) {
            var tituloA = a.titulo.toLowerCase();
            var tituloB = b.titulo.toLowerCase();
            if (tituloA < tituloB) {
                return -1;
            }
            if (tituloA > tituloB) {
                return 1;
            }
            return 0;
        });
    };
    return Gestão;
}());
var livrosIniciais = [
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: true },
    { titulo: "1984", autor: "George Orwell", genero: "Distopia", disponivel: true },
    { titulo: "A Metamorfose", autor: "Franz Kafka", genero: "Ficção", disponivel: false },
    { titulo: "O Hobbit", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: false },
    { titulo: "Admirável Mundo Novo", autor: "Aldous Huxley", genero: "Distopia", disponivel: true },
];
var biblioteca = new Gestão(livrosIniciais);
console.log("--- Fantasia (Filtrar por Gênero) ---");
var fantasia = biblioteca.filtrarPorGenero("fantasia");
console.log(fantasia.map(function (l) { return l.titulo; }));
// 2. Buscar por Autor
console.log("\n--- J.R.R. Tolkien (Buscar por Autor) ---");
var tolkien = biblioteca.buscarPorAutor("tolkien");
console.log(tolkien.map(function (l) { return l.titulo; }));
// 3. Obter Disponíveis e Ordenados
console.log("\n--- Livros Disponíveis e Ordenados por Título ---");
var disponiveisOrdenados = biblioteca.obterLivrosDisponiveisOrdenados();
console.log(disponiveisOrdenados.map(function (l) { return l.titulo; }));
