interface LivroBiblioteca{
    titulo:string;
    autor:string;
    genero:string;
    disponivel:boolean;
}

class Gestão {
    private acervo : LivroBiblioteca[];

    constructor(livrosInit : LivroBiblioteca[] = []){
        this.acervo = livrosInit;
    }

    /*Functions*/

    public adicionarLivro(livro: LivroBiblioteca):void{
        this.acervo.push(livro);
    }

    public filtrarPorGenero(genero:string): LivroBiblioteca[]{
        const generoNormalizado = genero.toLowerCase();

        return this.acervo.filter(livro => 
            livro.genero.toLowerCase() === generoNormalizado
        );
    }

    public buscarPorAutor(autor:string):LivroBiblioteca[]{
        const autorNormalizado = autor.toLowerCase();

        return this.acervo.filter(livro => 
            livro.autor.toLowerCase() === autorNormalizado
        );
    }

    public obterLivrosDisponiveisOrdenados():LivroBiblioteca[]{
        const disponiveis = this.acervo.filter(livro =>
            livro.disponivel
        );

        return disponiveis.slice().sort((a,b) => {
            const tituloA = a.titulo.toLowerCase();
            const tituloB = b.titulo.toLowerCase();

            if(tituloA < tituloB ){
                return -1
            } 
            if(tituloA >  tituloB){
                return 1
            }
            return 0
        })
    }
}

const livrosIniciais: LivroBiblioteca[] = [
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: true },
    { titulo: "1984", autor: "George Orwell", genero: "Distopia", disponivel: true },
    { titulo: "A Metamorfose", autor: "Franz Kafka", genero: "Ficção", disponivel: false },
    { titulo: "O Hobbit", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: false },
    { titulo: "Admirável Mundo Novo", autor: "Aldous Huxley", genero: "Distopia", disponivel: true },
];

const biblioteca = new Gestão(livrosIniciais);

console.log("--- Fantasia (Filtrar por Gênero) ---");
const fantasia = biblioteca.filtrarPorGenero("fantasia"); 
console.log(fantasia.map(l => l.titulo)); 

// 2. Buscar por Autor
console.log("\n--- J.R.R. Tolkien (Buscar por Autor) ---");
const tolkien = biblioteca.buscarPorAutor("tolkien");
console.log(tolkien.map(l => l.titulo)); 


// 3. Obter Disponíveis e Ordenados
console.log("\n--- Livros Disponíveis e Ordenados por Título ---");
const disponiveisOrdenados = biblioteca.obterLivrosDisponiveisOrdenados();
console.log(disponiveisOrdenados.map(l => l.titulo));