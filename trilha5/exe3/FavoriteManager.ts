type FavoriteList = string[];

abstract class FavoriteManager {
    protected favorites: FavoriteList = []

    public abstract addFavorite(item: string): void;

    public abstract getFav(): FavoriteList;
}

class MoviesFav extends FavoriteManager {
    public addFavorite(item: string): void {
        const norm_item = item.trim().toLowerCase();
        const exists = this.favorites.some(fav => fav.trim().toLowerCase() === norm_item);

        if (!exists) {
            this.favorites.push(item)
            console.log("Filme Adiconado");
        } else {
            console.log("O filme já está na lista");
        }
    }

    public getFav(): FavoriteList {
        return this.favorites.slice().sort();
    }
}

class BooksFavoriteManager extends FavoriteManager {

    public addFavorite(item: string): void {
        this.favorites.unshift(item);
        console.log(`Livro adicionado (no início): '${item}'`);
    }

    public getFavorites(): FavoriteList {
        return this.favorites;
    }

    public getFav(): FavoriteList {
        return this.favorites.slice().sort();
    }
}
console.log("\n==================================");
console.log("Gerenciador de Filmes (Movies)");
console.log("==================================");
const movieManager = new MoviesFav();
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
const bookManager = new BooksFavoriteManager();
bookManager.addFavorite("1984");
bookManager.addFavorite("O Pequeno Príncipe");

bookManager.addFavorite("Dom Quixote");


console.log("\n Livros Favoritos (Ordem de Inserção - Novo Primeiro):");
console.log(bookManager.getFav());