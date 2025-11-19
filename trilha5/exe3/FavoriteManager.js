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
var FavoriteManager = /** @class */ (function () {
    function FavoriteManager() {
        this.favorites = [];
    }
    return FavoriteManager;
}());
var MoviesFav = /** @class */ (function (_super) {
    __extends(MoviesFav, _super);
    function MoviesFav() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MoviesFav.prototype.addFavorite = function (item) {
        var norm_item = item.trim().toLowerCase();
        var exists = this.favorites.some(function (fav) { return fav.trim().toLowerCase() === norm_item; });
        if (!exists) {
            this.favorites.push(item);
            console.log("Filme Adiconado");
        }
        else {
            console.log("O filme já está na lista");
        }
    };
    MoviesFav.prototype.getFav = function () {
        return this.favorites.slice().sort();
    };
    return MoviesFav;
}(FavoriteManager));
var BooksFavoriteManager = /** @class */ (function (_super) {
    __extends(BooksFavoriteManager, _super);
    function BooksFavoriteManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BooksFavoriteManager.prototype.addFavorite = function (item) {
        this.favorites.unshift(item);
        console.log("Livro adicionado (no in\u00EDcio): '".concat(item, "'"));
    };
    BooksFavoriteManager.prototype.getFavorites = function () {
        return this.favorites;
    };
    BooksFavoriteManager.prototype.getFav = function () {
        return this.favorites.slice().sort();
    };
    return BooksFavoriteManager;
}(FavoriteManager));
console.log("\n==================================");
console.log("Gerenciador de Filmes (Movies)");
console.log("==================================");
var movieManager = new MoviesFav();
movieManager.addFavorite("Pulp Fiction");
movieManager.addFavorite("Inception");
movieManager.addFavorite("Avengers: Endgame");
movieManager.addFavorite("pulp fiction");
movieManager.addFavorite("O Poderoso Chefão");
console.log("\n Filmes Favoritos (Ordem Alfabética):");
console.log(movieManager.getFav());
console.log("\n==================================");
console.log("Gerenciador de Livros (Books)");
console.log("==================================");
var bookManager = new BooksFavoriteManager();
bookManager.addFavorite("1984");
bookManager.addFavorite("O Pequeno Príncipe");
bookManager.addFavorite("Dom Quixote");
console.log("\n Livros Favoritos (Ordem de Inserção - Novo Primeiro):");
console.log(bookManager.getFav());
